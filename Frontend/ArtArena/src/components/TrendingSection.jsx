import React from "react";
import { Link } from "react-router-dom";

const TrendingSection = ({ artworks }) => {
  if (!artworks || artworks.length === 0) return null;

  // pick the artwork with highest views
  const trendingArtwork = artworks.reduce(
    (max, art) => (art.views > (max?.views || 0) ? art : max),
    null
  );

  return (
    <div className="max-w-md mx-auto">
      <Link to={`/artwork/${trendingArtwork.id}`}>
        <div className="bg-white shadow-xl rounded-2xl p-6 transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
          <img
            src={trendingArtwork.image}
            alt={trendingArtwork.title}
            className="w-80 h-80 object-cover mx-auto rounded-xl hover:opacity-90 transition duration-300"
          />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800 hover:text-orange-600 transition">
              {trendingArtwork.title}
            </h3>
            <p className="text-gray-500 mt-1">
              by{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                {trendingArtwork.artist}
              </span>
            </p>
            <p className="text-green-600 font-semibold mt-3">
              👀 {trendingArtwork.views.toLocaleString()} views
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingSection;
