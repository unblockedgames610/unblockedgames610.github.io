// scripts/generateSitemap.js
const fs = require('fs');
const path = require('path');
const { generateSitemapXML } = require('../src/utils/sitemapGenerator');

const sitemap = generateSitemapXML();
const outputPath = path.join(__dirname, '../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log('Sitemap generated successfully at:', outputPath);