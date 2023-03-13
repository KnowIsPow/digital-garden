/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.curtisfisher.com',
  generateRobotsTxt: true, // (optional)
  exclude: ['/api/*'],
  // ...other options
};
