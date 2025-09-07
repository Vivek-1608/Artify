import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import TrendingSection from "../components/TrendingSection";
import CategoryFilter from "../components/CategoryFilter";
import ArtistGallery from "../components/ArtistGallery";

const Home = ({ artworks }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = artworks.filter(
    (art) =>
      (category === "All" || art.category === category) &&
      art.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-50 to-white flex justify-center items-start p-6">
      {/* Main Card Container (similar to UploadForm) */}
      <div className="w-full max-w-6xl bg-gradient-to-b from-blue-450 via-blue-100 to-white shadow-lg rounded-2xl p-10">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <SearchBar
            onSearch={setSearch}
            className="w-full text-xl px-6 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-300"
          />
        </div>

        {/* Category Filter */}
        <div className="max-w-5xl mx-auto mb-12">
          <CategoryFilter
            selected={category}
            onSelect={setCategory}
            className="flex flex-wrap justify-center gap-4 text-lg"
          />
        </div>

        {/* Trending Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            🔥 Trending Artwork
          </h2>
          <TrendingSection artworks={artworks} />
        </div>

        {/* Artist Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Explore Artworks
          </h2>
          <ArtistGallery artworks={filtered} />
        </div>
      </div>
    </div>
  );
};

export default Home;