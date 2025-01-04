import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Game } from '../types/game';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { GameFrame } from '../components/game/GameFrame';
import { GameActions } from '../components/game/GameActions';
import { Header } from '../components/layout/Header';
import React, { useEffect, useMemo } from 'react';
import { RelatedGames } from '../components/game/RelatedGames';
import { GameSchema } from '../components/seo/GameSchema'
import hotGamesData from '../data/hotGames.json';
import newestGamesData from '../data/newestGames.json';
import mostPopularGames from '../data/mostPopularGames.json';
import exclusiveGames from '../data/exclusiveGames.json';
import editorPicksGames from '../data/editorPicksGames.json';
import noBrandGames from '../data/noBrandGames.json';
import bestGames from '../data/bestGames.json';
import mobilePopularGames from '../data/mobileNewestGames.json';
import gamesData from '../data/games.json';

const combinedGamesData: Game[] = [
  ...(gamesData as Game[]),
  ...(hotGamesData as Game[]),
  ...(newestGamesData as Game[]),
  ...(mostPopularGames as Game[]),
  ...(exclusiveGames as Game[]),
  ...(editorPicksGames as Game[]),
  ...(noBrandGames as Game[]),
  ...(bestGames as Game[]),
  ...(mobilePopularGames as Game[])
];


export function GameDetailPage() {
  const { id } = useParams();
  const game = useMemo(() => combinedGamesData.find((g) => g.id === id), [id]) as Game;

  // SEO: Track page views
  useEffect(() => {
    if (game) {
      // Implement your analytics tracking here
      document.title = `Play ${game.title} Online - Free Browser Game | YourSite`;
    }
  }, [game]);

  if (!game) {
    return (
      <>
        <Helmet>
          <title>Game Not Found - Unblocked Games 610</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-2xl text-gray-800">
            Game not found
          </div>
        </div>
      </>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: game.category, href: `/category/${game.category.toLowerCase()}` },
    { label: game.title }
  ];

  // Get related games based on category and tags
  const relatedGames = useMemo(() => {
    const gameTagsSet = new Set(game.tags.split(',').map(tag => tag.trim()));
    return combinedGamesData
      .filter(g => 
        g.id !== game.id && 
        (g.category === game.category || 
         g.tags.split(',').some(tag => gameTagsSet.has(tag.trim())))
      )
      .slice(0, 6);
  }, [game]);

  return (
    <>
      <Helmet>
        <title>{`Play ${game.title} Online - Free ${game.category} Game 🎮`}</title>
        <meta name="description" content={`Play ${game.title} online for free! ${game.description.slice(0, 150)}... Experience this amazing ${game.category} game now!`} />
        <meta name="keywords" content={`${game.title}, ${game.category}, ${game.tags}, online games, free games, browser games`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`Play ${game.title} - Free Online Game`} />
        <meta property="og:description" content={game.description} />
        <meta property="og:image" content={game.thumb} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Play ${game.title} Online`} />
        <meta name="twitter:description" content={game.description} />
        <meta name="twitter:image" content={game.thumb} />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${window.location.origin}/game/${game.id}`} />
        
        {/* Article specific meta tags */}
        <meta property="article:published_time" content="2025-01-04" />
        <meta property="article:modified_time" content="2025-01-04" />
        <meta property="article:section" content={game.category} />
        <meta property="article:tag" content={game.tags} />
        <meta name="google-site-verification" content="Tx6ZacnVnvGQhXsWQxuphlBeTkJ2HQw9Fisx0s7QNXQ" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152482106464455" crossOrigin="anonymous"></script>
      </Helmet>

      {/* Structured Data */}
      <GameSchema game={game} />

      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-screen-md">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <GameFrame url={game.url} title={game.title} />
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Play {game.title} Online
            </h1>

            <GameActions 
              gameId={game.id}
              onToggleFullscreen={() => {
                const iframe = document.querySelector('iframe');
                iframe?.requestFullscreen();
              }}
            />
            
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Game Category</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {game.category}
                </span>
                {game.tags.split(',').map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Game Description</h2>
              <p className="text-gray-600 leading-relaxed">{game.description}</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">How to Play {game.title}</h2>
              <p className="text-gray-600 leading-relaxed">{game.instructions}</p>
            </section>

            {/* Related Games Section */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Similar Games You'll Love</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {relatedGames.map((relatedGame) => (
                  <RelatedGames key={relatedGame.id} game={relatedGame} />
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}