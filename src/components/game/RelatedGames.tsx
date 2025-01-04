import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/game';

interface RelatedGamesProps {
  game: Game;
}

export function RelatedGames({ game }: RelatedGamesProps) {
  return (
    <Link to={`/game/${game.id}`} className="block group">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={game.thumb}
          alt={game.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
      </div>
      <h3 className="mt-2 text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-2">
        {game.title}
      </h3>
      <p className="text-xs text-gray-500">{game.category}</p>
    </Link>
  );
}