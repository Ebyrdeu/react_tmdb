import axios from "axios";

const useTMDBService = () => {
	axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
	const _api = '1a77ef90c2c91a98096443b7b114f4be';

	const getSingleMovie = (movieId) => axios.get(`movie/${movieId}?api_key=${_api}`);

	const getCredits = (movieId) => axios.get(`movie/${movieId}/credits?api_key=${_api}`);

	const getActors = (actorId) => axios.get(`/person/${actorId}?api_key=${_api}`);

	const getMovieCredits = (actorId) => axios.get(`/person/${actorId}/combined_credits?api_key=${_api}`);

	return {
		getSingleMovie,
		getCredits,
		getActors,
		getMovieCredits
	}
}
export default useTMDBService;