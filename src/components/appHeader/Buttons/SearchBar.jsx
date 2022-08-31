import React from 'react';
import {Fragment, useEffect, useState} from "react";
import {useMovieSearch} from "../../../hooks/useMovie";
import {Box, CardMedia, TextField, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import noImage from "../../../assets/img/no-image.png";

const SearchResults = ({data}) => data?.pages.map(({data}, i) => {
	return <Fragment key={i} children={data.results.map(({id, title, poster_path, release_date}) => {
		return <Box as={Link} to={`info/movies/${id}`} key={id} sx={{ display: 'flex', textDecoration: 'none'}}>
			<CardMedia component="img"
			           height="63"
			           image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
			           alt={title}
			           sx={{width: 42, m: 1}}
			           onError={(e) => e.target.src = `${noImage}`}/>
			<Box sx={{p: 1}}>
				<Typography variant='subtitle2' sx={{color: '#647380'}} children={title}/>
				<Typography variant='subtitle2' sx={{color: '#647380'}} children={release_date}/>
			</Box>
		</Box>
	})}/>
})

const SearchBar = () => {
	const onSuccess = (data) => console.log(data);
	const [searchParam, setSearchParam] = useState('');
	const [show, setShow] = useState(false);
	const {data} = useMovieSearch(onSuccess, searchParam)

	useEffect(() => searchParam === '' ? setShow(false) : setShow(true), [searchParam, setShow]);
	const showItems = show ? <Box

		sx={{
		zIndex: 99999,
		height: 400,
		width: 400,
		overflow: 'hidden',
		overflowY: 'scroll',
		position: 'absolute',
		left: 0,
		right: 0,
		margin: 'auto',
		borderRadius: 2,
		boxShadow: '0 0 5px black',
		background: '#FAFAFA'
	}} children={<SearchResults data={data}/>}/> : null

	return (
		<Box>
			<Box sx={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mb: 5}}>
				<SearchIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
				<TextField onChange={({target}) => setSearchParam(target.value)} label="Search by Name" variant="standard"/>
			</Box>
			{showItems}
		</Box>
	)
};



export default SearchBar;