import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 text-gray-900 p-6 overflow-hidden">
      {/* Headline */}
      <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-900 drop-shadow-lg">
        🎨 Welcome to Artify
      </h1>

      {/* Tagline */}
      <p className="text-xl mb-12 max-w-2xl text-gray-800">
        “Art speaks where words are unable to explain. Every brush, every pixel,
        every frame tells a story. Step inside and let the masterpieces whisper
        their tales.”
      </p>

      {/* CTA */}
      <button
        onClick={() => navigate("/home")}
        className="px-10 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 transition-transform transform hover:-translate-y-1"
      >
        Enter Gallery
      </button>
    </div>
  );
};

export default Landing;
