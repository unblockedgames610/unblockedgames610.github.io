import React from 'react';
import { Game } from '../../types/game';
import { Button } from '../ui/Button';

interface GameDetailsProps {
  game: Game;
}

export function GameDetails({ game }: GameDetailsProps) {
  const tags = game.tags.split(', ');

  return (
    <div className="p-6 md:w-1/2">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {game.title}
      </h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Category</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {game.category}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-600">{game.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Play</h2>
        <p className="text-gray-600">{game.instructions}</p>
      </div>

      <Button
        onClick={() => window.open(game.url, '_blank', 'noopener,noreferrer')}
        className="w-full md:w-auto"
      >
        Play Now
      </Button>
    </div>
  );
}