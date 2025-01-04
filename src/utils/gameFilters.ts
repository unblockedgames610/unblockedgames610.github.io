import { Game } from '../types/game';

export const filterGamesBySearch = (games: Game[], query: string): Game[] => {
  if (!query) return games;
  
  const searchLower = query.toLowerCase();
  return games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchLower) ||
      game.description.toLowerCase().includes(searchLower) ||
      game.tags.toLowerCase().includes(searchLower)
  );
};

export const filterGamesByCategory = (games: Game[], category: string): Game[] => {
  if (!category) return games;
  return games.filter((game) => game.category === category);
};