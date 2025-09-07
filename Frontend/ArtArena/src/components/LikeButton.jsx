import React, { useState } from "react";

const LikeButton = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`flex items-center gap-2 ${
        liked ? "text-red-600" : "text-gray-500"
      }`}
    >
      ❤️ {likes}
    </button>
  );
};

export default LikeButton;
