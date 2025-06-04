import React from 'react';

type MovieSearchProps = {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ query, setQuery, handleSearch }) => {
    return (
        <div className="flex gap-4 mb-6">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Search
            </button>
        </div>
    );
}

export default MovieSearch;