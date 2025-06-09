import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
