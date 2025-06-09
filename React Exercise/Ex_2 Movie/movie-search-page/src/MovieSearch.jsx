import { useState } from "react";
import { searchMovies } from "../services/api";
import { MovieList } from "./components/MovieList";
import { SearchInput } from "./components/SearchInput";

export function MovieSearch() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (value) => {
    if (!value.trim()) return;
    const movies = await searchMovies(value);
    setMovies(movies);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchInput handleSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default MovieSearch;
