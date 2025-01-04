import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/exclusiveGames.json';

export function ExclusivePage() {
  const [games] = useState<Game[]>(gamesData as Game[]);

  return (
    <>
      <Helmet>
        <title>Exclusive Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Play exclusive educational games that are only available on our platform. Perfect for school breaks and learning!" />
        <meta name="keywords" content="exclusive games, unblocked games, educational games, online games, school break games, fun games" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Exclusive Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Play exclusive educational games that are only available on our platform. Perfect for school breaks and learning!" />
        <meta property="og:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exclusive Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Play exclusive educational games that are only available on our platform. Perfect for school breaks and learning!" />
        <meta name="twitter:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />

        {/* Robots meta tag for better indexing */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.href}`} />
        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Exclusive Unblocked Games - Play Educational Games Online",
              "description": "Play exclusive educational games that are only available on our platform. Perfect for school breaks and learning!",
              "url": "${window.location.href}",
              "image": "https://unblockedgames610.github.io/link-to-image.jpg",
              "keywords": "exclusive games, unblocked games, educational games, online games, school break games, fun games"
            }
          `}
        </script>
        <meta name="google-site-verification" content="Tx6ZacnVnvGQhXsWQxuphlBeTkJ2HQw9Fisx0s7QNXQ" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152482106464455" crossOrigin="anonymous"></script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Exclusive Games
          </h2>
          <GameGrid games={games} />
        </section>
      </main>
    </>
  );
}
