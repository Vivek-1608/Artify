import React, { useState, useEffect } from "react";

const CommentSection = ({ artworkId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  // Load saved comments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`comments-${artworkId}`);
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, [artworkId]);

  // Save to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem(`comments-${artworkId}`, JSON.stringify(comments));
  }, [comments, artworkId]);

  const handleAddComment = () => {
    if (!input.trim()) return;
    const newComment = { id: Date.now(), text: input };
    setComments([...comments, newComment]);
    setInput("");
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Comments</h3>

      <div className="space-y-2">
        {comments.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
          >
            <p className="text-gray-700">{c.text}</p>
            <button
              onClick={() => handleDeleteComment(c.id)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
