import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Game } from '../types/game';
import { Header } from '../components/layout/Header';
import { GameGrid } from '../components/game/GameGrid';
import gamesData from '../data/games.json';
import React from 'react';

const typedGamesData: Game[] = gamesData as Game[];

export function TagPage() {
  const { tag } = useParams();

  const filteredGames = typedGamesData.filter((game) =>
    game.tags.toLowerCase().split(', ').includes(tag?.toLowerCase() || '')
  );

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>{`${tag} Games - Play Online | Free Unblocked Games 610`}</title>
        <meta name="description" content={`Discover and play the best ${tag} games online for free. Enjoy unblocked games with no restrictions.`} />
        <meta name="keywords" content={`${tag}, ${tag} games, play ${tag} games, unblocked games, free online games`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/tag/${tag}`} />
        <meta name="google-site-verification" content="Tx6ZacnVnvGQhXsWQxuphlBeTkJ2HQw9Fisx0s7QNXQ" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${tag} Games`,
            "description": `Discover and play the best ${tag} games online for free. Enjoy unblocked games with no restrictions.`,
            "url": `${window.location.origin}/tag/${tag}`,
            "numberOfItems": filteredGames.length,
            "itemListElement": filteredGames.map((game, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": game.title,
              "url": `${window.location.origin}/game/${game.id}`,
              "description": game.description || `Play ${game.title} now for free!`
            }))
          })}
        </script>

        {/* Google Ads Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152482106464455"
          crossOrigin="anonymous"
        ></script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm mb-4 text-gray-600">
          <a href="/" className="text-blue-500 hover:underline">Home</a> /{' '}
          <span className="text-gray-800">{tag?.toUpperCase()} TAG</span>
        </nav>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {tag?.toUpperCase()} TAG
          </h2>

          {filteredGames.length === 0 ? (
            <div className="text-center text-xl text-gray-800">
              Sorry, we couldn't find any games tagged "{tag}". Explore our{' '}
              <a href="/" className="text-blue-500 underline">popular games</a>.
            </div>
          ) : (
            <GameGrid games={filteredGames} />
          )}
        </section>
      </main>
    </>
  );
}
