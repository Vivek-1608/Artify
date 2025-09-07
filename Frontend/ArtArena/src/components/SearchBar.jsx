import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-2xl px-6 py-4 shadow-md max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search artworks..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full bg-transparent outline-none text-xl px-3 py-2"
      />
    </div>
  );
};

export default SearchBar;
