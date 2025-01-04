import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/mobileNewestGames.json';

export function NoBrandPage() {
  const [games] = useState<Game[]>(gamesData as Game[]);

  return (
    <>
      <Helmet>
        <title>No Brand Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Discover the best No Brand Unblocked games! Play free educational games online, perfect for school breaks and fun learning!" />
        <meta name="keywords" content="no brand unblocked games, educational games, online games, mobile games, free games" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="No Brand Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Discover the best No Brand Unblocked games! Play free educational games online, perfect for school breaks and fun learning!" />
        <meta property="og:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="No Brand Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Discover the best No Brand Unblocked games! Play free educational games online, perfect for school breaks and fun learning!" />
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
              "name": "No Brand Unblocked Games - Play Educational Games Online",
              "description": "Discover the best No Brand Unblocked games! Play free educational games online, perfect for school breaks and fun learning!",
              "url": "${window.location.href}",
              "image": "https://unblockedgames610.github.io/link-to-image.jpg",
              "keywords": "no brand unblocked games, educational games, online games, mobile games, free games"
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
            No Brand Games
          </h2>
          <GameGrid games={games} />
        </section>
      </main>
    </>
  );
}
