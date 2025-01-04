import React, { useState } from 'react';
import { Game } from '../../types/game';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: Game[];
}

export function GameGrid({ games }: GameGridProps) {
  const [visibleGamesCount, setVisibleGamesCount] = useState(50);

  const handleLoadMore = () => {
    setVisibleGamesCount((prevCount) => prevCount + 50);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-6">
        {games.slice(0, visibleGamesCount).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      
      {visibleGamesCount < games.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
