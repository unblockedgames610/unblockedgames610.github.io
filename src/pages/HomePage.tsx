import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { CategorySection } from '../components/home/CategorySection';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/games.json';
import { TagsSection } from '../components/home/TagSection';
import Footer from '../components/layout/Footer';

// Lazy loading image component
const LazyLoadImage = ({ src, alt }: { src: string, alt: string }) => (
  <img src={src} alt={alt} loading="lazy" className="game-image" />
);

export function HomePage() {
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const gamesPerPage = 20;

  // Load more games when scrolling
  const loadMoreGames = useCallback(() => {
    if (loading) return; // Prevent multiple loads at the same time

    setLoading(true);
    const nextPage = currentPage + 1;
    const newGames = gamesData.slice(currentPage * gamesPerPage, nextPage * gamesPerPage);
    setGames(prevGames => [...prevGames, ...newGames]);
    setCurrentPage(nextPage);
    setLoading(false);
  }, [currentPage, loading]);

  // Detect if the user has scrolled to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;

      if (scrollPosition >= bottomPosition - 2100) {
        loadMoreGames();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMoreGames]);

  useEffect(() => {
    loadMoreGames(); // Load the first batch of games
  }, []); // Only run once when the component is mounted

  return (
    <>
      <Helmet>
        <title>Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta name="keywords" content="unblocked games, educational games, online games, free games, play games, school games" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta property="og:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta name="twitter:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        
        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.href}`} />
        
        {/* Schema Markup (Structured Data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Unblocked Games",
              "url": "${window.location.href}",
              "description": "Play free educational games online. Perfect for school breaks and learning!",
              "image": "https://unblockedgames610.github.io/link-to-image.jpg",
              "keywords": "unblocked games, educational games, online games, free games, play games, school games"
            }
          `}
        </script>

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/css/critical.css" as="style" />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Categories</h2>
          <CategorySection />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Games</h2>
          <GameGrid games={games} />
          {loading && <div>Loading...</div>} {/* Show a loading indicator when games are being loaded */}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">New Games</h2>
          <GameGrid games={games} />
          {loading && <div>Loading...</div>} {/* Show a loading indicator when games are being loaded */}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">All Tags</h2>
          <TagsSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
