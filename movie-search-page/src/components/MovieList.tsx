import React from 'react';
import { Movie } from '../types/movie';

type MovieListProps = {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    if (!movies || movies.length === 0) {
        return <p className="text-center text-gray-500">No movies found.</p>;
    }

    return (
        <div className="flex flex-row gap-6 overflow-x-auto p-4">
            {movies.map((movie) => (
                <div key={movie.id} className="min-w-[250px] border border-gray-200 p-4 rounded-lg shadow-sm flex-shrink-0">
                    <h3 className="text-lg font-semibold">{movie.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{movie.overview}</p>
                    {movie.poster_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="mt-4 w-full h-auto rounded"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default MovieList;