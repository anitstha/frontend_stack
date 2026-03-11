import React, { useEffect, useState, useRef } from "react";
import MovieList from "../components/MovieList";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const fetchMovies = async (query) => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=7ea3f4be&s=${query}`,
      );
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) fetchMovies(query);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="pt-12 flex justify-center px-4">
        <div
          className="flex items-center w-full max-w-2xl 
          bg-zinc-900 border border-zinc-700 
          rounded-full shadow-md overflow-hidden
          focus-within:border-pink-500 transition"
        >
          {/* Icon */}
          <div className="pl-5 text-zinc-400 text-xl">
            <FiSearch />
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Search movies..."
            className="flex-1 bg-transparent text-white 
            placeholder-zinc-500 px-4 py-3 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700
            px-6 py-3 text-white font-medium
            transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loader or Movies */}
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>

          {/* Text */}
          <p className="text-zinc-400">Loading movies...</p>
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
