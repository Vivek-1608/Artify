import React from "react";

const categories = ["All", "Digital", "Painting", "Photography", "Sculpture"];

const CategoryFilter = ({ selected, onSelect }) => {
  return (
    <div className="flex gap-4 mt-4 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-6 py-3 rounded-full text-lg font-medium transition duration-200 ${
            selected === cat
              ? "bg-white-800 text-black shadow-md"
              : "bg-gray-200 text-black-700 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
