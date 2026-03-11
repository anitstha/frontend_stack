import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="group relative w-80 h-[460px] rounded-2xl overflow-hidden 
    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Movie Image */}
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={movie.Poster}
          alt="movie"
          className="h-full w-full object-cover group-hover:scale-105 transition duration-400"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-wide">{movie.Title}</h1>

        {/* Year */}
        <p className="text-sm text-gray-200 mt-1">Released: {movie.Year}</p>

        {/* Button */}
        <Link to={`/movie/${movie.imdbID}`}>
          <button className="mt-4 w-full py-2 rounded-lg bg-pink-600 font-semibold shadow-md cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
