import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/games.json';

export function BestPage() {
  const [games] = useState<Game[]>(gamesData as Game[]);

  return (
    <>
      <Helmet>
        <title>Best Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Play the best free educational games online. Perfect for school breaks, fun learning, and hours of entertainment!" />
        <meta name="keywords" content="best unblocked games, free educational games, online games, top games, school break games, fun learning games" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Play the best free educational games online. Perfect for school breaks, fun learning, and hours of entertainment!" />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Play the best free educational games online. Perfect for school breaks, fun learning, and hours of entertainment!" />
        <meta name="twitter:image" content="link-to-image.jpg" />
        
        {/* Robots meta tag for better indexing */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Best Unblocked Games - Play Educational Games Online",
              "description": "Play the best free educational games online. Perfect for school breaks, fun learning, and hours of entertainment!",
              "url": "${window.location.href}",
              "image": "link-to-image.jpg",
              "keywords": "best unblocked games, free educational games, online games, top games, school break games, fun learning games"
            }
          `}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Best Games
          </h2>
          <GameGrid games={games} />
        </section>
      </main>
    </>
  );
}
