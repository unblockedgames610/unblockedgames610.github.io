import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/newestGames.json';

export function NewestPage() {
  const [games] = useState<Game[]>(gamesData as Game[]);

  return (
    <>
      <Helmet>
        <title>Newest Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Explore the newest unblocked educational games online. Perfect for school breaks, learning, and entertainment!" />
        <meta name="keywords" content="newest unblocked games, educational games, online games, new games, free games" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Newest Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Explore the newest unblocked educational games online. Perfect for school breaks, learning, and entertainment!" />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Newest Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Explore the newest unblocked educational games online. Perfect for school breaks, learning, and entertainment!" />
        <meta name="twitter:image" content="link-to-image.jpg" />
        
        {/* Robots meta tag for better indexing */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Newest Unblocked Games - Play Educational Games Online",
              "description": "Explore the newest unblocked educational games online. Perfect for school breaks, learning, and entertainment!",
              "url": "${window.location.href}",
              "image": "link-to-image.jpg",
              "keywords": "newest unblocked games, educational games, online games, new games, free games"
            }
          `}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Newest Games
          </h2>
          <GameGrid games={games} />
        </section>
      </main>
    </>
  );
}
