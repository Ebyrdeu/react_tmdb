import React from 'react';
import CardMovieHeader from "../components/descriptionMovies/CardMovieHeader";
import CardCast from "../components/descriptionMovies/CardCast";
import {useParams} from "react-router-dom";
import CardActorHeader from "../components/descriptionActors/CardActorHeader";
import CardMovies from "../components/descriptionActors/CardMovies";

const AppDescription = () => {
	const {type} = useParams();


	return (type === 'movies')
		/*! Movies Page*/
		? <>
			<CardMovieHeader/>
			<CardCast/>
		</>
		/*! Actors Page*/
		: <>
			<CardActorHeader/>
			<CardMovies/>
		</>
};

export default AppDescription;