import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LikeButton from "../components/LikeButton";
import CommentSection from "../components/CommentSection";

const ArtworkDetail = ({ artworks, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artworks.find((art) => art.id === Number(id));

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
        <p className="text-center text-gray-700 text-xl">
          Artwork not found.
        </p>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this artwork?")) {
      onDelete(artwork.id);
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Artwork Image */}
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-[28rem] object-cover rounded-xl shadow-md hover:scale-[1.01] transition duration-300"
        />

        {/* Details */}
        <div className="mt-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {artwork.title}
          </h1>

          {/* Artist name becomes clickable */}
          <p className="text-lg text-gray-600 mt-2">
            by{" "}
            <Link
              to={`/profile/${encodeURIComponent(artwork.artist)}`}
              className="text-blue-600 font-medium hover:underline"
            >
              {artwork.artist}
            </Link>
          </p>

          {/* Price */}
          {artwork.price && (
            <p className="mt-3 text-green-600 font-bold text-xl">
              ₹{artwork.price}
            </p>
          )}

          {/* Description */}
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            {artwork.description}
          </p>

          {/* Actions */}
          <div className="mt-6 flex items-center gap-6">
            <LikeButton initialLikes={artwork.likes} />
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>

          {/* Comments */}
          <div className="mt-8">
            <CommentSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
