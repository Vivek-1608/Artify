import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy artist data
const dummyArtists = [
  {
    name: "Van Gogh",
    phone: "+1-123-456-7890",
    email: "vangogh@example.com",
    bio: "A pioneer of modern art. Passionate about colors and textures.",
    avatar: "https://i.pravatar.cc/150?img=11",
    social: {
      instagram: "https://instagram.com/vangogh",
      twitter: "https://twitter.com/vangogh",
      linkedin: "https://linkedin.com/in/vangogh",
    },
  },
  {
    name: "Alice",
    phone: "+1-234-567-8901",
    email: "alice@example.com",
    bio: "Digital painter and illustrator. Exploring surrealism and dreamscapes.",
    avatar: "https://i.pravatar.cc/150?img=34",
    social: {
      instagram: "https://instagram.com/alice",
      twitter: "https://twitter.com/alice",
      linkedin: "https://linkedin.com/in/alice",
    },
  },
  {
    name: "Rahul",
    phone: "+1-345-678-9012",
    email: "rahul@example.com",
    bio: "Photographer capturing moments of life and nature.",
    avatar: "https://i.pravatar.cc/150?img=33",
    social: {
      instagram: "https://instagram.com/rahul",
      twitter: "https://twitter.com/rahul",
      linkedin: "https://linkedin.com/in/rahul",
    },
  },
];

const Profile = ({ artworks }) => {
  const { artist } = useParams();

  if (artist) {
    const artistWorks = artworks.filter(
      (art) => art.artist.toLowerCase() === decodeURIComponent(artist).toLowerCase()
    );

    const artistInfo = dummyArtists.find(
      (a) => a.name.toLowerCase() === decodeURIComponent(artist).toLowerCase()
    );

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
        {artistInfo && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl mb-8 transform hover:scale-[1.01] transition duration-300 flex flex-col md:flex-row items-center gap-6">
            <img
              src={artistInfo.avatar}
              alt={artistInfo.name}
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-extrabold text-gray-800">{artistInfo.name}</h1>
              <p className="text-gray-600 mt-2">{artistInfo.bio}</p>
              <p className="text-gray-500 mt-1">Phone: {artistInfo.phone}</p>
              <p className="text-gray-500">Email: {artistInfo.email}</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a href={artistInfo.social.instagram} target="_blank" className="text-blue-500 hover:underline">Instagram</a>
                <a href={artistInfo.social.twitter} target="_blank" className="text-blue-500 hover:underline">Twitter</a>
                <a href={artistInfo.social.linkedin} target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
              </div>
              <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition">
                Follow
              </button>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Artworks by {decodeURIComponent(artist)}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artistWorks.map((art) => (
            <Link
              key={art.id}
              to={`/artwork/${art.id}`}
              className="block bg-white rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-[1.02] transition transform"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-2 text-gray-800 hover:text-blue-600 transition">{art.title}</h3>
              <p className="text-green-600 font-medium mt-1">₹{art.price}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Show all artists
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Artists</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dummyArtists.map((artistInfo) => (
          <Link
            key={artistInfo.name}
            to={`/profile/${encodeURIComponent(artistInfo.name)}`}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.01] transition flex items-center gap-4"
          >
            <img
              src={artistInfo.avatar}
              alt={artistInfo.name}
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{artistInfo.name}</h2>
              <p className="text-gray-500">
                {artworks.filter((art) => art.artist === artistInfo.name).length} artworks
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile;
