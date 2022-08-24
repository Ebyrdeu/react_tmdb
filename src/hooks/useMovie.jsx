import React from 'react';
import {useQuery} from "react-query";
import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const _api = '1a77ef90c2c91a98096443b7b114f4be';


const getAllMovies = (offset = 1, sort) => axios.get(`discover/movie?api_key=${_api}&page=${offset}&sort_by=popularity.desc`);
const getSingleMovie = (movieId) => axios.get(`movie/${movieId}?api_key=${_api}`);
const getCredits = (movieId) => axios.get(`movie/${movieId}/credits?api_key=${_api}`);
const getMovieVideo = (movieId) => axios.get(`discover/movie/${movieId}?api_key=${_api}`);

export const useMovieDiscover = (onSuccess, onError, offset, sort) => {
	return useQuery('discover-movies', () => getAllMovies(offset, sort), {
		onSuccess, onError, select: ({data}) => {
			return data.results.map((movie) => {
				return {
					title: movie.title,
					genre: movie.genre,
					overview: movie.overview,
					release_date: movie.release_date,
					backdrop_path: movie.backdrop_path,
					poster_path: movie.poster_path,
					vote_average: movie.vote_average,
					vote_count: movie.vote_count,
					id: movie.id
				}
			})
		}
	})
};


export const useMovieVideo = (movieId) => {
	return useQuery(['movie-video', movieId], () => getMovieVideo(movieId), {
		select: ({data}) => {
			return data.results.map((video) => {
				return {key: video.key}
			})
		}
	})

};

export const useSingleMovie = (onSuccess, movieId) => {
	return useQuery(['movie-video', movieId], () => getSingleMovie(movieId), {
		onSuccess
	})

};

export const useCredits = (onSuccess, movieId) => {
	return useQuery(['movie-credits', movieId], () => getCredits(movieId), {
		onSuccess
	})

};
