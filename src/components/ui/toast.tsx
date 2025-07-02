"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    
    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const Icon = icons[toast.type];

  const colors = {
    success: {
      bg: "bg-green-950/90",
      border: "border-green-500/30",
      icon: "text-green-400",
      glow: "shadow-green-500/20",
    },
    error: {
      bg: "bg-red-950/90",
      border: "border-red-500/30", 
      icon: "text-red-400",
      glow: "shadow-red-500/20",
    },
    warning: {
      bg: "bg-yellow-950/90",
      border: "border-yellow-500/30",
      icon: "text-yellow-400",
      glow: "shadow-yellow-500/20",
    },
    info: {
      bg: "bg-blue-950/90",
      border: "border-blue-500/30",
      icon: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
  };

  const colorConfig = colors[toast.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3 
      }}
      className={cn(
        "relative overflow-hidden rounded-xl border backdrop-blur-xl",
        "shadow-2xl min-h-[80px] p-4",
        colorConfig.bg,
        colorConfig.border,
        colorConfig.glow
      )}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] animate-[shimmer_2s_ease-in-out_infinite]" />
      
      {/* Top Border Glow */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent",
        toast.type === "success" && "via-green-400",
        toast.type === "error" && "via-red-400",
        toast.type === "warning" && "via-yellow-400",
        toast.type === "info" && "via-blue-400"
      )} />

      <div className="relative flex items-start gap-3">
        {/* Icon */}
        <div className="shrink-0 mt-0.5">
          <div className="relative">
            <Icon className={cn("w-5 h-5", colorConfig.icon)} />
            {/* Icon Glow */}
            <div className={cn(
              "absolute inset-0 rounded-full blur-sm opacity-50",
              toast.type === "success" && "bg-green-400",
              toast.type === "error" && "bg-red-400", 
              toast.type === "warning" && "bg-yellow-400",
              toast.type === "info" && "bg-blue-400"
            )} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <h4 className="text-white font-semibold text-sm leading-5">
            {toast.title}
          </h4>
          {toast.description && (
            <p className="text-white/70 text-xs mt-1 leading-4">
              {toast.description}
            </p>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => onRemove(toast.id)}
          className="shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
        >
          <X className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: (toast.duration || 5000) / 1000, ease: "linear" }}
        className={cn(
          "absolute bottom-0 left-0 h-1 rounded-full",
          toast.type === "success" && "bg-green-400",
          toast.type === "error" && "bg-red-400",
          toast.type === "warning" && "bg-yellow-400", 
          toast.type === "info" && "bg-blue-400"
        )}
      />
    </motion.div>
  );
}

// Utility function for easy toast creation
export const toast = {
  success: (title: string, description?: string, duration?: number) => ({
    type: "success" as const,
    title,
    description,
    duration,
  }),
  error: (title: string, description?: string, duration?: number) => ({
    type: "error" as const,
    title,
    description,
    duration,
  }),
  warning: (title: string, description?: string, duration?: number) => ({
    type: "warning" as const,
    title,
    description,
    duration,
  }),
  info: (title: string, description?: string, duration?: number) => ({
    type: "info" as const,
    title,
    description,
    duration,
  }),
}; 