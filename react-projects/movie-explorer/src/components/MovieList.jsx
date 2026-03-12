import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="h-full w-full flex flex-wrap justify-center gap-4 py-10 px-60">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
