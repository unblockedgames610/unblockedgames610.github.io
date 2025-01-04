import React from 'react';
import { Game } from '../../types/game';

interface GameSchemaProps {
  game: Game;
}

export function GameSchema({ game }: GameSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    image: game.thumb,
    genre: game.category,
    gamePlatform: 'Web Browser',
    applicationCategory: 'Game',
    operatingSystem: 'Any',
    keywords: game.tags,
    url: window.location.href,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Unblocked Games 610',
      url: window.location.origin
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}