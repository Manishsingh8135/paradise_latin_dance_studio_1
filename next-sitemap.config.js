/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://paradiselatindance.com', // Replace with your actual domain when it's live
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://paradiselatindance.com/sitemap-0.xml',
      'https://paradiselatindance.com/server-sitemap.xml',
      'https://paradiselatindance.com/image-sitemap.xml',
      'https://paradiselatindance.com/video-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
  },
  exclude: [
    '/server-sitemap.xml',
    '/image-sitemap.xml',
    '/video-sitemap.xml',
    '/api/*',
    '/_next/*',
  ],
  // Change to true to immediately index all pages
  // Set to false if you want to exclude pages by default
  autoLastmod: true,
  priority: 0.7,
  changefreq: 'weekly',
} 
