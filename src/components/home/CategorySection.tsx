import React from 'react';
import { Link } from 'react-router-dom';
import categoryData from '../../data/categories.json';

const popularCategories = [
  {
    id: 'category/arcade',
    title: 'Arcade Games',
    description: 'Explore a variety of classic arcade games, offering endless entertainment for all players!',
    icon: '👾⋆˚☆˖°👾',
    color: 'bg-blue-500'
  },
  {
    id: 'category/sports',
    title: 'Sports Games',
    description: 'Play fun sports games including basketball, soccer, and more in an exciting virtual environment!',
    icon: "( っ'-')╮ =͟͟͞͞🏀",
    color: 'bg-purple-500'
  },
  {
    id: 'category/shooting',
    title: 'Shooting Games',
    description: 'Action-packed shooting games featuring intense combat and strategy!',
    icon: '▄︻デ══━一💥',
    color: 'bg-green-500'
  },
  {
    id: 'category/racing',
    title: 'Racing Games',
    description: 'Get ready for high-speed racing action with thrilling car races!',
    icon: '🏎️🏁🚥🏆💨',
    color: 'bg-red-400'
  }
];

export function CategorySection() {
  return (
    <div>
      {/* Popular Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularCategories.map((category) => (
          <Link
            key={category.id}
            to={`/${category.id}`}
            className="block group"
            aria-labelledby={`category-title-${category.id}`} // Improved accessibility
          >
            <div className={`${category.color} rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative`}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 id={`category-title-${category.id}`} className="text-xl font-bold mb-2">
                {category.title}
              </h3>
              {/* Hint shown as a chat bubble with improved SEO */}
              <p
                className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white px-2 py-1 rounded-lg text-xs shadow-lg"
                aria-hidden="true" // Make hint visually hidden for search engines but still accessible to users
              >
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Small Categories (Additional Categories from the imported data) */}
      <div className="flex flex-wrap gap-2 mt-8">
        {categoryData.map((categoryName, index) => {
          // Dynamically create an ID and other properties for each category
          const categoryId = `category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`;
          const categoryTitle = categoryName;
          const categoryDescription = `Explore fun and exciting ${categoryName} games, offering a variety of gameplay styles to enjoy!`;

          return (
            <Link
              key={index}
              to={`/${categoryId}`}
              className="block group"
              aria-labelledby={`category-title-${categoryId}`} // Improved accessibility
            >
              <div className="bg-gray-300 rounded-full px-3 py-1 text-black text-xs font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-md relative">
                <h3 id={`category-title-${categoryId}`} className="text-xs">{categoryTitle}</h3>
                {/* Hint shown as a chat bubble */}
                <p
                  className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between whitespace-nowrap"
                  aria-hidden="true" // Improved accessibility
                >
                  <span className="mr-2">{categoryDescription}</span>
                  <div className="w-0 h-0 border-t-8 border-l-8 border-r-8 border-transparent border-t-black"></div> {/* Tail of the bubble */}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
