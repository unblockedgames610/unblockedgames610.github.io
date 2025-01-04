import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/hotGames.json';
import React from 'react';

export function HotPage() {
  const [games] = useState<Game[]>(gamesData as Game[]);

  return (
    <>
      <Helmet>
        <title>Hot Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Discover the hottest unblocked games online. Perfect for school breaks, fun, and learning!" />
        <meta name="keywords" content="hot unblocked games, educational games, online games, free games, play games" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Hot Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Discover the hottest unblocked games online. Perfect for school breaks, fun, and learning!" />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hot Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Discover the hottest unblocked games online. Perfect for school breaks, fun, and learning!" />
        <meta name="twitter:image" content="link-to-image.jpg" />
        
        {/* Robots meta tag for better indexing */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Hot Unblocked Games - Play Educational Games Online",
              "description": "Discover the hottest unblocked games online. Perfect for school breaks, fun, and learning!",
              "url": "${window.location.href}",
              "image": "link-to-image.jpg",
              "keywords": "hot unblocked games, educational games, online games, free games, play games"
            }
          `}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Hot Games
          </h2>
          <GameGrid games={games} />
        </section>
      </main>
    </>
  );
}
