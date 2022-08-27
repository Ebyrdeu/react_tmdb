import {useInfiniteQuery, useQuery} from "react-query";
import useTMDBService from "../service/useTMDBService";
import axios from "axios";

export const useMovieDiscover = (onSuccess, onError, sorted, genre) => useInfiniteQuery(['discover-movies', {sorted, genre}],  ({pageParam = 1}) =>
	axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1a77ef90c2c91a98096443b7b114f4be&page=${pageParam}&sort_by=${sorted}&with_genres=${genre}`), {
		onSuccess,
		onError,
		getNextPageParam: (_lastPage, allPages) => (allPages.length < allPages[0].data.total_pages) ? allPages.length + 1 : undefined,
	});

export const useSingleMovie = (onSuccess, movieId) => {
	const {getSingleMovie} = useTMDBService();
	return useQuery(['movie-desc', movieId], () => getSingleMovie(movieId), {onSuccess})
};

export const useCredits = (onSuccess, movieId) => {
	const {getCredits} = useTMDBService();
	return useQuery(['movie-desc-credits', movieId], () => getCredits(movieId), {onSuccess})
};

export const useActors = (onSuccess, actorId) => {
	const {getActors} = useTMDBService();
	return useQuery(['actor-desc', actorId], () => getActors(actorId), {onSuccess})
};

export const useMovieCredits = (onSuccess, movieId) => {
	const {getMovieCredits} = useTMDBService();
	return useQuery(['movie-desc-credits', movieId], () => getMovieCredits(movieId), {onSuccess})
};