import { Link } from 'react-router-dom';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
            {game.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {game.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {game.category.map((cat) => (
              <span
                key={cat}
                className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}