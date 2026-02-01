// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
// })

// module.exports = withNextra()

import nextra from 'nextra';
import themeConfig from './theme.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = nextra({
  theme: 'nextra-theme-docs',
  themeConfig,
});

export default nextConfig;
