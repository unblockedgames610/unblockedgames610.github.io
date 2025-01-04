import { Game } from '../types/game';

export const getUniqueCategories = (games: Game[]): string[] => {
  const categories = games.map(game => game.category);
  const uniqueCategories = Array.from(new Set(categories));
  return uniqueCategories.sort();
};