import {useEffect, useState} from "react";
import MovieCardsTypes from "../components/MovieCardsTypes";
import {Box, Container, ToggleButton, ToggleButtonGroup} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";
import Background from "../components/background/Background";
import {useMovieDiscover} from "../hooks/useMovie";

const AppMovies = () => {
	const onSuccess = (data) => console.log(data)
	const onError = (data) => console.log(data)

	// States
	const [offset, setOffset] = useState(1);
	const [cardType, setCardType] = useState(2);
	const [updateBg, setUpdateBg] = useState(1);
	const [movieData, setMovieData] = useState([]);
	const [sortedBy, setSortedBy] = useState('popularity.desc');

	// Service
	const {data, isLoading, isError, error, refetch} = useMovieDiscover(onSuccess, onError, offset)

	// Effects
/*
	// eslint-disable-next-line
	useEffect(() => () => onRequest(offset, sortedBy), []);





	// Functions
	const onRequest = (offset, sort) => getAllMovies(offset, sort).then((newMovieList) => {

		setOffset(offset => offset + 1);
	});

	const onFindBottom = (e) => {
		if (!loading) {
			if (window.innerHeight + e.target.documentElement.scrollTop  >= e.target.documentElement.scrollHeight) {
				setOffset(offset + 1);
				setUpdateBg(updateBg + 1)
				return onRequest(offset, sortedBy);
			}
		}
	}

	const onSortChange = (e) => {
		setOffset(1)
		setSortedBy(e.target.value);
	}*/


	const onFindBottom = (e) => {
		if (isLoading) return;
		if (window.innerHeight + e.target.documentElement.scrollTop  >= e.target.documentElement.scrollHeight) {
			setOffset(offset + 1);
			return refetch();
		}

	}


	useEffect(() => {
		window.addEventListener('scroll', onFindBottom);
		return () => window.removeEventListener('scroll', onFindBottom);
	})

	if (isLoading) return <h2>Loading...</h2>
	if (isError) return <h2>{error.message}</h2>


	// Render
	return (<>
			<Background/>
			<Container sx={{mt: 10}}>
				<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', flexWrap: 'wrap'}}>
					<ToggleButtonGroup
						sx={{m: 1}}
						color="primary"
						value={sortedBy}
						exclusive
						/*onChange={onSortChange}*/
						aria-label="List Type">
						<ToggleButton value="release_date.desc" aria-label="left aligned" children={'Release Date Dec'}/>
						<ToggleButton value="popularity.desc" aria-label="left aligned" children={'Popularity Dec'}/>
						<ToggleButton value="vote_average.desc" aria-label="left aligned" children={'Vote Average  Dec'}/>
					</ToggleButtonGroup>

				<ToggleButtonGroup
					color="primary"
					value={cardType}
					sx={{m: 1}}
					exclusive
					onChange={(e, newCardType) => setCardType(newCardType)}
					aria-label="Card Type">
					<ToggleButton value={1} aria-label="left aligned" children={<ViewModuleIcon/>}/>
					<ToggleButton value={2} aria-label="left aligned" children={<ViewComfyIcon/>}/>
					<ToggleButton value={3} aria-label="left aligned" children={<ViewListIcon/>}/>
				</ToggleButtonGroup>
				</Box>
			</Container>
			<MovieCardsTypes data={data} cardType={cardType}/>

		</>

	);
};

export default AppMovies;