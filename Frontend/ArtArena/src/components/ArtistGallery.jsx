import React from "react";
import { Link } from "react-router-dom";

const ArtistGallery = ({ artworks }) => {
  if (!artworks || artworks.length === 0)
    return (
      <p className="text-center text-gray-500 mt-6 text-lg">
        No artworks found
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {artworks.map((art) => (
        <Link key={art.id} to={`/artwork/${art.id}`}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-[1.04] hover:shadow-2xl cursor-pointer">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5 text-center">
              <h4 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
                {art.title}
              </h4>
              <p className="text-gray-500 mt-2 text-lg">{art.artist}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArtistGallery;
