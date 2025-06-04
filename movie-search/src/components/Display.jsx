import { useState, useEffect } from "react";
import {
  fetchPopularMovies,
  fetchSearchMovies,
} from "../services/movie-search";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export function Display({ searchKeyword }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!apiKey) {
        console.error("API key is missing");
        return;
      }

      try {
        let results = [];
        if (!searchKeyword) {
          results = await fetchPopularMovies();
        } else {
          results = await fetchSearchMovies(searchKeyword);
        }
        setMovies(results);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
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
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
