import { Link } from 'react-router-dom';
import { Game } from '../../types/game';
import React from 'react';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} className="group">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            src={game.thumb}
            alt={game.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-sm">
              {game.category}
            </span>
          </div>
        </div>
        
        {/* <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 mb-2">
            {game.title}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
              <span>5/5</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 text-gray-400 mr-1" />
              <span>5-10 min</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {game.tags.split(', ').map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </Link>
  );
}