import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "150px", borderRadius: "8px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};
