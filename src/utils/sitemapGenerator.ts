// src/utils/sitemapGenerator.ts
import { Game } from '../types/game';
import gamesData from '../data/games.json';
import hotGamesData from '../data/hotGames.json';
import newestGamesData from '../data/newestGames.json';
import mostPopularGames from '../data/mostPopularGames.json';
import exclusiveGames from '../data/exclusiveGames.json';
import editorPicksGames from '../data/editorPicksGames.json';
import noBrandGames from '../data/noBrandGames.json';
import bestGames from '../data/bestGames.json';

const BASE_URL = 'https://yourdomain.com'; // Replace with your domain

interface URLSet {
  url: {
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  };
}

export function generateSitemapXML(): string {
  const urlSet: URLSet[] = [];
  const today = new Date().toISOString().split('T')[0];

  // Add static routes
  const staticRoutes = [
    { path: '/', priority: '1.0' },
    { path: '/hot', priority: '0.9' },
    { path: '/newest', priority: '0.9' },
    { path: '/most-popular', priority: '0.9' },
    { path: '/best', priority: '0.9' },
    { path: '/exclusive', priority: '0.9' },
    { path: '/editor-picks', priority: '0.9' },
    { path: '/no-brand', priority: '0.9' },
  ];

  staticRoutes.forEach((route) => {
    urlSet.push({
      url: {
        loc: `${BASE_URL}${route.path}`,
        lastmod: today,
        changefreq: 'daily',
        priority: route.priority,
      },
    });
  });

  // Combine all games
  const allGames: Game[] = [
    ...(gamesData as Game[]),
    ...(hotGamesData as Game[]),
    ...(newestGamesData as Game[]),
    ...(mostPopularGames as Game[]),
    ...(exclusiveGames as Game[]),
    ...(editorPicksGames as Game[]),
    ...(noBrandGames as Game[]),
    ...(bestGames as Game[]),
  ];

  // Add game detail pages
  allGames.forEach((game) => {
    urlSet.push({
      url: {
        loc: `${BASE_URL}/game/${game.id}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.8',
      },
    });
  });

  // Add category pages
  const categories = new Set(allGames.map((game) => game.category));
  categories.forEach((category) => {
    urlSet.push({
      url: {
        loc: `${BASE_URL}/category/${category.toLowerCase()}`,
        lastmod: today,
        changefreq: 'daily',
        priority: '0.7',
      },
    });
  });

  // Add tag pages
  const tags = new Set(
    allGames.flatMap((game) => game.tags.split(',').map((tag) => tag.trim()))
  );
  tags.forEach((tag) => {
    urlSet.push({
      url: {
        loc: `${BASE_URL}/tag/${encodeURIComponent(tag.toLowerCase())}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.6',
      },
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet
  .map(
    ({ url }) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
}