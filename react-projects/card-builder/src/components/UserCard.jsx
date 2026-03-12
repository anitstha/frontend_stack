import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const UserCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-6 text-center">
      {/* User Image */}
      <img
        className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500"
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User"
      />

      {/* User Name */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
        John Doe
      </h2>

      {/* Description */}
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Frontend Developer passionate about building amazing web experiences.
      </p>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-4 space-x-4 text-gray-600 dark:text-gray-300">
        <a href="#" className="hover:text-indigo-500 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-700 transition">
          <FaLinkedinIn />
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
          Message
        </button>
        <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserCard;
