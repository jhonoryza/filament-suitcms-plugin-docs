// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx', // cukup path, jangan import
});

module.exports = withNextra();
