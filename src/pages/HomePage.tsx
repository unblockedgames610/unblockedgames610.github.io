import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { CategorySection } from '../components/home/CategorySection';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/games.json';
import React from 'react';
import { TagsSection } from '../components/home/TagSection';
import Footer from '../components/layout/Footer';

export function HomePage() {
  const [games] = useState<Game[]>(gamesData as Game[]);

  return (
    <>
      <Helmet>
        <title>Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta name="keywords" content="unblocked games, educational games, online games, free games, play games, school games" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta property="og:image" content="link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta name="twitter:image" content="link-to-image.jpg" />
        
        {/* Robots meta tag for better indexing */}
        <meta name="robots" content="index, follow" />
        
        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Unblocked Games - Play Educational Games Online",
              "description": "Play free educational games online. Perfect for school breaks and learning!",
              "url": "${window.location.href}",
              "image": "link-to-image.jpg",
              "keywords": "unblocked games, educational games, online games, free games, play games, school games"
            }
          `}
        </script>
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Popular Categories
          </h2>
          <CategorySection />
        </section>

        {/* <TagsSection /> */}
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Games
          </h2>
          <GameGrid games={games.slice(0, 20)} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            New Games
          </h2>
          <GameGrid games={games.slice(21, 40)} />
        </section>
       
        {/* Popular Tags Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            All Tags
          </h2>
          <TagsSection />        
        </section>
      </main>
      <Footer />
    </>
  );
}
