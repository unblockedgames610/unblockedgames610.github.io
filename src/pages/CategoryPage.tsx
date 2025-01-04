import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Game } from '../types/game';
import { Header } from '../components/layout/Header';
import { CategorySection } from '../components/home/CategorySection';
import { GameGrid } from '../components/game/GameGrid';
import gamesData from '../data/games.json';
import React from 'react';

const typedGamesData: Game[] = gamesData as Game[];

export function CategoryPage() {
  const { category } = useParams();
  const filteredGames = typedGamesData.filter((game) => game.category.toLowerCase() === category);

  return (
    <>
      <Helmet>
        <title>{`${category} - Play Online Games | Unblocked Games 610`}</title>
        <meta name="description" content={`Browse and play ${category} games online.`} />
      </Helmet>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {category?.toLocaleUpperCase()} CATEGORY
          </h2>

          {filteredGames.length === 0 ? (
            <div className="text-center text-xl text-gray-800">
              No games found in this category.
            </div>
          ) : (
            <GameGrid games={filteredGames} />
          )}
        </section>
      </main>
    </>
  );
}
