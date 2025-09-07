import React from "react";

const ProfileHeader = ({ name, bio, avatar, followers }) => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl flex flex-col sm:flex-row items-center gap-8 transform hover:scale-[1.01] transition duration-300">
        
        {/* Avatar */}
        <img
          src={avatar}
          alt={name}
          className="w-28 h-28 rounded-full object-cover shadow-md"
        />
        
        {/* Info */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-gray-800">{name}</h1>
          <p className="text-gray-600 mt-2 text-lg">{bio}</p>
          <p className="text-gray-500 mt-2 text-md">
            👥 Followers: <span className="font-semibold">{followers}</span>
          </p>

          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-md hover:shadow-lg hover:from-green-600 hover:to-green-700 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
