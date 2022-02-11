const baseURL: string = 'https://api.themoviedb.org/3';

const apiKey: string = '?api_key=ac638f5f2ee99ab5dcc5056b9fb7fe17&language=uk-UA';

export default baseURL;

export const urls = {
    movies: (page: number, genre: number | null): string => `/discover/movie${apiKey}&region=UA&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}&with_watch_monetization_types=flatrate`,
    genres: (id: number): string => `/movie/${id}${apiKey}`,
    allGenres: '/genre/movie/list' + apiKey
};