import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import useMovieSearch from './hooks/useMovieSearch';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const { movies, loading, error, searchMovies } = useMovieSearch();

  const handleSearch = () => {
    searchMovies(query);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Movie Search</h1>
      <MovieSearch query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;