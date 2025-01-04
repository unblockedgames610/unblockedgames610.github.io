import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/layout/Header';
import { CategorySection } from '../components/home/CategorySection';
import { GameGrid } from '../components/game/GameGrid';
import { Game } from '../types/game';
import gamesData from '../data/games.json';
import { TagsSection } from '../components/home/TagSection';
import Footer from '../components/layout/Footer';

export function HomePage() {
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [newGames, setNewGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const gamesPerPage = 20;
  const initialLoadCount = 8;

  const getFeaturedGames = useCallback(() => {
    return gamesData
      .filter(game => game.featured)
      .slice(0, initialLoadCount);
  }, []);

  const getNewGames = useCallback(() => {
    return [...gamesData]
      .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
      .slice(0, initialLoadCount);
  }, []);

  useEffect(() => {
    setFeaturedGames(getFeaturedGames());
    setNewGames(getNewGames());
  }, [getFeaturedGames, getNewGames]);

  const loadMoreGames = useCallback(() => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = initialLoadCount + (currentPage - 1) * gamesPerPage;
      const endIndex = startIndex + gamesPerPage;

      setFeaturedGames(prev => [
        ...prev,
        ...gamesData.filter(game => game.featured).slice(startIndex, endIndex)
      ]);

      setNewGames(prev => [
        ...prev,
        ...[...gamesData]
          .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
          .slice(startIndex, endIndex)
      ]);

      setCurrentPage(nextPage);
      setLoading(false);
    }, 100);
  }, [currentPage, loading]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        loadMoreGames();
      }
    }, options);

    const sentinel = document.getElementById('scroll-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [loadMoreGames, loading]);

  return (
    <>
      <Helmet>
        <title>Unblocked Games - Play Educational Games Online</title>
        <meta name="description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta name="keywords" content="unblocked games, educational games, online games, free games, play games, school games" />
        
        <meta property="og:title" content="Unblocked Games - Play Educational Games Online" />
        <meta property="og:description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta property="og:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unblocked Games - Play Educational Games Online" />
        <meta name="twitter:description" content="Play free educational games online. Perfect for school breaks and learning!" />
        <meta name="twitter:image" content="https://unblockedgames610.github.io/link-to-image.jpg" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.href}`} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Unblocked Games - Play Educational Games Online",
              "description": "Play free educational games online. Perfect for school breaks and learning!",
              "url": "${window.location.href}",
              "image": "https://unblockedgames610.github.io/link-to-image.jpg",
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Games
          </h2>
          <GameGrid games={featuredGames} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            New Games
          </h2>
          <GameGrid games={newGames} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            All Tags
          </h2>
          <TagsSection />
        </section>

        {/* Infinite scroll sentinel */}
        <div 
          id="scroll-sentinel" 
          className="h-4 mb-8 flex justify-center items-center"
        >
          {loading && (
            <div className="flex justify-center items-center space-x-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <span className="text-gray-600">Loading more games...</span>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}