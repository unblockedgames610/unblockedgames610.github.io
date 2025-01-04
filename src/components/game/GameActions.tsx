import { ShareIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';

interface GameActionsProps {
  gameId: string;
  onToggleFullscreen: () => void;
}

export function GameActions({ onToggleFullscreen }: GameActionsProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href
      });
    } catch (error) {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className="p-1"
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
          >
            {star <= (hoveredRating || rating) ? (
              <StarIconSolid className="w-6 h-6 text-yellow-400" />
            ) : (
              <StarIcon className="w-6 h-6 text-gray-400" />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={handleShare}
        className="p-2 hover:bg-gray-100 rounded-full"
        title="Share"
      >
        <ShareIcon className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={onToggleFullscreen}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
      >
        Fullscreen
      </button>
    </div>
  );
}