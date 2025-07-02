/**
 * Provider Factory for Paradise Dance Studio Email Service
 * Manages multiple email providers and handles switching logic
 */

import { IEmailProvider } from './provider-interface';
import { EmailResult, EmailTemplate } from './types';

export type ProviderType = 'resend' | 'gmail' | 'auto';

export interface ProviderFactoryConfig {
  primaryProvider: ProviderType;
  fallbackEnabled: boolean;
  fallbackProvider?: ProviderType;
  healthCheckInterval?: number;
}

/**
 * Get provider factory configuration from environment variables
 */
export const getProviderFactoryConfig = (): ProviderFactoryConfig => {
  return {
    primaryProvider: (process.env.EMAIL_PROVIDER as ProviderType) || 'resend',
    fallbackEnabled: process.env.EMAIL_FALLBACK_ENABLED === 'true',
    fallbackProvider: process.env.EMAIL_FALLBACK_PROVIDER as ProviderType,
    healthCheckInterval: parseInt(process.env.EMAIL_HEALTH_CHECK_INTERVAL || '300000'),
  };
};

/**
 * Factory class that manages email providers and handles switching
 */
export class ProviderFactory {
  private providers: Map<string, IEmailProvider> = new Map();
  private healthyProviders: Set<string> = new Set();
  private lastHealthCheck: number = 0;
  private config: ProviderFactoryConfig;

  constructor(config: ProviderFactoryConfig) {
    this.config = {
      healthCheckInterval: 5 * 60 * 1000, // 5 minutes default
      ...config,
    };
  }

  /**
   * Register a provider with the factory
   */
  registerProvider(provider: IEmailProvider): void {
    if (!provider.name) {
      throw new Error('Provider must have a name');
    }

    console.log(`📧 Registering email provider: ${provider.name} (priority: ${provider.priority})`);
    this.providers.set(provider.name, provider);
    
    // Perform initial health check
    this.checkProviderHealth(provider.name);
  }

  /**
   * Get all registered providers sorted by priority
   */
  getAvailableProviders(): IEmailProvider[] {
    return Array.from(this.providers.values())
      .sort((a, b) => a.priority - b.priority);
  }

  /**
   * Get a specific provider by name
   */
  getProvider(name: string): IEmailProvider | null {
    return this.providers.get(name) || null;
  }

  /**
   * Get the primary provider based on configuration
   */
  async getPrimaryProvider(): Promise<IEmailProvider | null> {
    if (this.config.primaryProvider === 'auto') {
      return this.getHealthiestProvider();
    }

    const provider = this.getProvider(this.config.primaryProvider);
    
    // Check if primary provider is healthy
    if (provider && this.healthyProviders.has(provider.name)) {
      return provider;
    }

    // If primary is not healthy and fallback is enabled, try fallback
    if (this.config.fallbackEnabled && this.config.fallbackProvider) {
      const fallbackProvider = this.getProvider(this.config.fallbackProvider);
      if (fallbackProvider && this.healthyProviders.has(fallbackProvider.name)) {
        console.warn(`⚠️ Primary provider (${this.config.primaryProvider}) unhealthy, using fallback (${this.config.fallbackProvider})`);
        return fallbackProvider;
      }
    }

    // Return primary provider even if unhealthy (let it handle the error)
    return provider;
  }

  /**
   * Get the healthiest provider (highest priority among healthy providers)
   */
  getHealthiestProvider(): IEmailProvider | null {
    const healthyProviders = Array.from(this.providers.values())
      .filter(provider => this.healthyProviders.has(provider.name))
      .sort((a, b) => a.priority - b.priority);

    return healthyProviders.length > 0 ? healthyProviders[0] : null;
  }

  /**
   * Send email using the appropriate provider
   */
  async sendEmail(to: string, template: EmailTemplate): Promise<EmailResult & { provider: string }> {
    const provider = await this.getPrimaryProvider();
    
    if (!provider) {
      console.error('❌ No email providers available');
      return {
        success: false,
        error: 'No email providers available',
        provider: 'none',
      };
    }

    console.log(`📨 Sending email via ${provider.name} provider`);
    
    try {
      const result = await provider.sendEmail(to, template);
      return {
        ...result,
        provider: provider.name,
      };
    } catch (error) {
      console.error(`❌ Provider ${provider.name} failed:`, error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Email sending failed',
        provider: provider.name,
      };
    }
  }

  /**
   * Check health of all providers
   */
  async checkAllProvidersHealth(): Promise<Map<string, boolean>> {
    const healthResults = new Map<string, boolean>();
    
    const healthChecks = Array.from(this.providers.entries()).map(async ([name, provider]) => {
      try {
        const isHealthy = await provider.isHealthy();
        healthResults.set(name, isHealthy);
        
        if (isHealthy) {
          this.healthyProviders.add(name);
        } else {
          this.healthyProviders.delete(name);
        }
        
        return { name, isHealthy };
      } catch (error) {
        console.warn(`⚠️ Health check failed for ${name}:`, error);
        healthResults.set(name, false);
        this.healthyProviders.delete(name);
        return { name, isHealthy: false };
      }
    });

    const results = await Promise.all(healthChecks);
    
    console.log('🏥 Provider health check results:', 
      results.map(r => `${r.name}: ${r.isHealthy ? '✅' : '❌'}`).join(', ')
    );

    this.lastHealthCheck = Date.now();
    return healthResults;
  }

  /**
   * Check health of a specific provider
   */
  private async checkProviderHealth(providerName: string): Promise<boolean> {
    const provider = this.providers.get(providerName);
    if (!provider) return false;

    try {
      const isHealthy = await provider.isHealthy();
      
      if (isHealthy) {
        this.healthyProviders.add(providerName);
      } else {
        this.healthyProviders.delete(providerName);
      }
      
      return isHealthy;
    } catch (error) {
      console.warn(`⚠️ Health check failed for ${providerName}:`, error);
      this.healthyProviders.delete(providerName);
      return false;
    }
  }

  /**
   * Refresh health status if needed (based on interval)
   */
  private async refreshHealthStatus(): Promise<void> {
    const now = Date.now();
    const timeSinceLastCheck = now - this.lastHealthCheck;
    
    if (timeSinceLastCheck > this.config.healthCheckInterval!) {
      await this.checkAllProvidersHealth();
    }
  }

  /**
   * Get factory status for monitoring
   */
  async getStatus() {
    return {
      totalProviders: this.providers.size,
      healthyProviders: this.healthyProviders.size,
      primaryProvider: this.config.primaryProvider,
      fallbackEnabled: this.config.fallbackEnabled,
      providers: Array.from(this.providers.entries()).map(([name, provider]) => ({
        name,
        priority: provider.priority,
        healthy: this.healthyProviders.has(name),
        config: provider.getConfig(),
      })),
      lastHealthCheck: new Date(this.lastHealthCheck).toISOString(),
    };
  }

  /**
   * Update factory configuration
   */
  updateConfig(newConfig: Partial<ProviderFactoryConfig>): void {
    this.config = { ...this.config, ...newConfig };
    console.log('🔧 Provider factory configuration updated:', this.config);
  }
} 