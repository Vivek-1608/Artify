import React from "react";
import { useParams, Link } from "react-router-dom";

const Profile = ({ artworks }) => {
  const { artist } = useParams();

  if (artist) {
    // Show a specific artist's profile
    const artistWorks = artworks.filter(
      (art) =>
        art.artist.toLowerCase() === decodeURIComponent(artist).toLowerCase()
    );

    if (artistWorks.length === 0) {
      return (
        <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <h1 className="text-3xl font-bold text-gray-800">
                {decodeURIComponent(artist)}
              </h1>
              <p className="text-gray-500 mt-2">No works uploaded yet.</p>
            </div>
          </div>

        </div>
      );
    }

    return (
      <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col">
        <div className="p-8 flex-grow">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center sm:text-left">
            {decodeURIComponent(artist)}’s Profile
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {artistWorks.map((art) => (
              <Link
                key={art.id}
                to={`/artwork/${art.id}`}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 block overflow-hidden"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {art.title}
                  </h2>
                  <p className="text-green-600 font-medium mt-1">₹{art.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        
      </div>
    );
  }

  // Show all artists if no specific one selected
  const uniqueArtists = [...new Set(artworks.map((art) => art.artist))];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col">
      <div className="p-8 flex-grow">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center sm:text-left">
          All Artists
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {uniqueArtists.map((author) => (
            <Link
              key={author}
              to={`/profile/${encodeURIComponent(author)}`}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {author}
              </h2>
              <p className="text-gray-500 mt-2">
                {
                  artworks.filter((art) => art.artist === author).length
                }{" "}
                artworks
              </p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Profile;
