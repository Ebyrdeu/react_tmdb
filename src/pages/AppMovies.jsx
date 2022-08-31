import {useContext, useEffect, useState} from "react";
import MovieCardsTypes from "../components/appHeader/MovieCardsTypes";
import {Fab} from "@mui/material";
import Background from "../components/background_animations/Background";
import {useMovieDiscover} from "../hooks/useMovie";
import WhileLoading from "../components/misc/WhileLoading";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AppHeaderInputs from "../components/appHeader/AppHeaderInputs";
import {HeaderInputContext} from "../context/HeaderInputContext";



const AppMovies = () => {
	const onSuccess = (data) => console.log(data);
	const onError = (data) => console.log(data);

	// !Context
	const {sortedBy,genre} = useContext(HeaderInputContext);

	// !States
	const [visible, setVisible] = useState(false);

	// !Hooks
	const {data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetchingNextPage} = useMovieDiscover(onSuccess, onError, sortedBy, genre);

	// !Detect Bottom of screen
	const onFindBottom = (e) => {
		if (isLoading) return <WhileLoading/>;
		if (!hasNextPage) return;
		if (window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight) return fetchNextPage();
	}

	const toggleVisible = () => document.documentElement.scrollTop > 300 ? setVisible(true) : setVisible(false);

	// !Effects
	useEffect(() => {
		window.addEventListener('scroll', onFindBottom);
		window.addEventListener('scroll', toggleVisible);
		return () => window.removeEventListener('scroll', onFindBottom);
	})


	// !Loading and Error Handlers
	if (isLoading) return <WhileLoading/>
	if (isError) return <h2>{error.message}</h2>


	// !Render
	return (<>
			<Background/>
			<Fab onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}
			     sx={{position: 'sticky', top: ' 90%', left: '96%', display: visible ? 'true' : 'none'}}
			     color="primary"
			     aria-label="add"
			     children={<ArrowDropUpIcon/>}/>


			<AppHeaderInputs/>
			<MovieCardsTypes data={data} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage}/>
		</>

	);
};

export default AppMovies;