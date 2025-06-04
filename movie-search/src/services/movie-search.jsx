import { useState, useEffect } from "react";
import axios from "axios";

export function MovieList({ searchKeyword }) {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("API key is missing");
      return;
    }
    const fetchPopularMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        setMovies(res.data.results);
      } catch (err) {
        console.log("Error", err);
      }
    };

    const fetchSearchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
            searchKeyword
          )}`
        );
        setMovies(res.data.results);
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    if (!searchKeyword) {
      fetchPopularMovies();
    } else {
      fetchSearchMovies();
    }
  }, [searchKeyword, apiKey]);

  return (
    <div>
      <h2>{searchKeyword ? "Search Results" : "Popular Movies"}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
