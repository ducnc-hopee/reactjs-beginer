export type Movie = {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
}

export type MovieApiResponse = {
    results: Movie[];
}

export type TmdbErrorResponse = {
    status_message: string;
    status_code: number;
}
