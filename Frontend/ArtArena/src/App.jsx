import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import ArtworkDetail from "./pages/ArtworkDetail";

const initialArtworks = [
  { 
    id:1,
    image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80", 
    title: "Starry Night", 
    artist: "Van Gogh",
    category: "Digital", 
    price: 1200, 
    likes: 45, 
    views: 200 
  },
  { 
    id:2,
    image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=600&auto=format&fit=crop&q=60", 
    title: "Dreamscape", 
    artist: "Alice", 
    category: "Painting",
    price: 800, 
    likes: 60, 
    views: 180 
  },
  { 
    id:3,
    image: "https://images.unsplash.com/photo-1522003374706-1ee629dfab6d?w=600&auto=format&fit=crop&q=60", 
    title: "Digital Waves", 
    artist: "Rahul", 
    category: "Photography",
    price: 500, 
    likes: 30, 
    views: 150 
  },
];

const App = () => {
  // Load artworks from localStorage or fallback to initial
  const [artworks, setArtworks] = useState(() => {
    const saved = localStorage.getItem("artworks");
    return saved ? JSON.parse(saved) : initialArtworks;
  });

  // Save to localStorage whenever artworks change
  useEffect(() => {
    localStorage.setItem("artworks", JSON.stringify(artworks));
  }, [artworks]);

  const handleUpload = (newArtwork) => {
    setArtworks((prev) => [newArtwork, ...prev]);
  };

  const handleDelete = (id) => {
  const updated = artworks.filter((art) => art.id !== id);
  setArtworks(updated);
  localStorage.setItem("artworks", JSON.stringify(updated));
  };

  return (
    <>
      {/* Navbar */}
<nav className="flex justify-between items-center px-8 py-6 bg-gray-900 shadow-lg">
  {/* Logo */}
  <Link to="/" className="text-3xl font-extrabold text-white hover:text-blue-400 transition duration-300">
    🎨 Artify
  </Link>

  {/* Navigation Links */}
  <div className="space-x-10 text-xl font-bold">
    <Link 
      to="/home" 
      className="text-white hover:text-blue-400 transition duration-300 cursor-pointer"
    >
      Home
    </Link>
    <Link 
      to="/upload" 
      className="text-white hover:text-blue-400 transition duration-300 cursor-pointer"
    >
      Upload
    </Link>
    <Link 
      to="/profile" 
      className="text-white hover:text-blue-400 transition duration-300 cursor-pointer"
    >
      Profile
    </Link>
  </div>
  </nav>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home artworks={artworks} />} />
        <Route path="/profile" element={<Profile artworks={artworks} />} />
        <Route path="/profile/:artist" element={<Profile artworks={artworks} />} />
        <Route path="/upload" element={<Upload onUpload={handleUpload} />} />
        <Route path="/artwork/:id"element={<ArtworkDetail artworks={artworks} onDelete={handleDelete} />}
        
      />

      </Routes>
    </>
  );
};

export default App;
