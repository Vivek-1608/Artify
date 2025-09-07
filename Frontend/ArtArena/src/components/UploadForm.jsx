import React, { useState } from "react";

const UploadForm = ({ onUpload }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    description: "",
    category: "Digital",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.artist || !formData.image) {
      alert("Please add a title, artist name, and image");
      return;
    }

    const newArtwork = {
      id: Date.now(),
      ...formData,
      likes: 0,
      views: 0,
    };

    onUpload(newArtwork);

    setFormData({
      title: "",
      artist: "",
      description: "",
      category: "Digital",
      price: "",
      image: null,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 relative overflow-hidden">
      {/* Abstract floating shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Glass Card */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-lg w-full border border-white/20 z-10"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
          Upload Your Artwork 🎨
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/60 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
          required
        />

        <input
          type="text"
          name="artist"
          placeholder="Artist Name"
          value={formData.artist}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/60 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/60 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/60 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
        />

        <input
          type="number"
          name="price"
          placeholder="Price (optional)"
          value={formData.price}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white/60 p-3 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 outline-none transition"
        />

        {/* File Upload */}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full text-white mb-4"
          required
        />

        {/* ✅ Live Image Preview */}
        {formData.image && (
          <div className="mb-4">
            <p className="text-white font-semibold mb-2">Preview:</p>
            <img
              src={formData.image}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg shadow-lg border-2 border-white/50"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition transform shadow-md"
        >
          Upload 🚀
        </button>
      </form>

      {/* 🌊 Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4c9deeff"
            fillOpacity="1"
            d="M0,160L40,170.7C80,181,160,203,240,213.3C320,224,400,224,480,224C560,224,640,224,720,218.7C800,213,880,203,960,197.3C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default UploadForm;
