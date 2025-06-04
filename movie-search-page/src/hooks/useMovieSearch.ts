import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Movie, TmdbErrorResponse } from "../types/movie";

type MovieSearchResult = {
    movies: Movie[];
    loading: boolean;
    error: string | null;
    searchMovies: (query: string) => void;
} // day la kieu tra ve cua hook 

const useMovieSearch = (): MovieSearchResult => { // custom React Hook tra ve 1 object 

    const [movies, setMovies] = useState<Movie[]>([]); // mang luu danh sach phim 
    const [loading, setLoading] = useState<boolean>(false); // trang thai loading
    const [error, setError] = useState<string | null>(null); // trang thai loi

    const searchMovies = async (query: string) => {
        if (!query.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get<{ results: Movie[] }>(
                'https://api.themoviedb.org/3/search/movie',
                {
                    params: {
                        api_key: process.env.TMDB_API_KEY,  // lay API key tu bien moi truong
                        query,
                    },
                }
            );
            setMovies(response.data.results);
        } 
        catch (err)
        {
            const error = err as AxiosError<TmdbErrorResponse>;
            setError(error.response?.data?.status_message || "An error occurred while fetching movies.");
        }
        finally {
            setLoading(false);
        }
    };

    return {
        movies,
        loading,
        error,
        searchMovies,
    };
};

export default useMovieSearch;