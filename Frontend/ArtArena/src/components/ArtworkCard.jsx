import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = ({ id, image, title, artist, price, likes, views }) => {
  return (
    <Link to={`/artwork/${id}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-[1.03]">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover hover:opacity-90 transition"
        />

        {/* Details */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
            {title}
          </h3>
          <p className="text-md text-gray-600 mt-1">by {artist}</p>

          {price && (
            <p className="text-green-600 font-bold mt-2 text-lg">₹{price}</p>
          )}

          <div className="flex justify-between mt-4 text-gray-500 text-md">
            <span>❤️ {likes}</span>
            <span>👁️ {views}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
