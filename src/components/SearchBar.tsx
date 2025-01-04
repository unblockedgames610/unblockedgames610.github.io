// import React, { ChangeEvent } from 'react';

// interface SearchBarProps {
//   onSearch: (query: string) => void;
//   onCategoryChange: (category: string) => void;
//   categories: string[];
//   selectedCategory: string;
// }

// export function SearchBar({
//   onSearch,
//   onCategoryChange,
//   categories,
//   selectedCategory,
// }: SearchBarProps) {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 mb-8">
//       <input
//         type="text"
//         placeholder="Search games..."
//         onChange={(e: ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
//         className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <select
//         value={selectedCategory}
//         onChange={(e) => onCategoryChange(e.target.value)}
//         className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <option value="">All Categories</option>
//         {categories.map((category) => (
//           <option key={category} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }