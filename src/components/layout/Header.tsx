import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect, useRef } from 'react';
import gamesData from '../../data/games.json';
import { Game } from '../../types/game';

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Game[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Search logic with debouncing
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      const filteredGames = (gamesData as Game[])
        .filter(game =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.tags.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 20); // Show top 6 results

      setSuggestions(filteredGames);
      setShowSuggestions(true);
    }, 300); // 300ms delay for debouncing

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Handle suggestion click
  const handleSuggestionClick = (gameId: string) => {
    setShowSuggestions(false);
    setSearchTerm('');
    navigate(`/game/${gameId}`);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0].id);
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-semibold tracking-wide text-white hover:text-indigo-200 transition-colors duration-200">
            Unblocked Games
          </Link>

          <div className="hidden sm:flex items-center space-x-6">
            <Link to="/newest" className="text-lg hover:text-indigo-200 transition-colors duration-200">Newest</Link>
            <Link to="/hot" className="text-lg hover:text-indigo-200 transition-colors duration-200">Hot</Link>
            <Link to="/most-popular" className="text-lg hover:text-indigo-200 transition-colors duration-200">Most Popular</Link>
            <Link to="/best" className="text-lg hover:text-indigo-200 transition-colors duration-200">Best</Link>
            <Link to="/exclusive" className="text-lg hover:text-indigo-200 transition-colors duration-200">Exclusive</Link>
            <Link to="/editor-picks" className="text-lg hover:text-indigo-200 transition-colors duration-200">Editor Picks</Link>
            <Link to="/no-brand" className="text-lg hover:text-indigo-200 transition-colors duration-200">No Brand</Link>
          </div>
        </div>

        <div className="mt-6 max-w-2xl mx-auto">
          <div className="relative" ref={searchRef}>
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="▄︻デ══━一 Discover 100.000 exciting new games! Ready to explore? 🧐"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 ease-in-out"
            />
            
            {/* Suggestions dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto">
                {suggestions.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => handleSuggestionClick(game.id)}
                    className="flex items-center p-3 hover:bg-indigo-100 cursor-pointer text-gray-800 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={game.thumb}
                        alt={game.title}
                        className="w-12 h-12 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder-game.png'; // Add a placeholder image
                        }}
                      />
                    </div>
                    <div className="ml-3 overflow-hidden">
                      <div className="font-medium truncate">{game.title}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="truncate">{game.category}</span>
                        {game.tags && (
                          <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                            {game.tags.split(',')[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
