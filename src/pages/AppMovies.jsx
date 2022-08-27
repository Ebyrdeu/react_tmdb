import {useEffect, useState} from "react";
import MovieCardsTypes from "../components/MovieCardsTypes";
import {Box, Container, Fab, FormControl, InputLabel, MenuItem, Select, ToggleButton, ToggleButtonGroup} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";
import Background from "../components/background_animations/Background";
import {useMovieDiscover} from "../hooks/useMovie";
import WhileLoading from "../components/WhileLoading";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const AppMovies = () => {
	const onSuccess = (data) => console.log(data);
	const onError = (data) => console.log(data);

	// !States
	const [cardType, setCardType] = useState(1);
	const [sortedBy, setSortedBy] = useState('');
	const [genre, setGenre] = useState('');
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
		return () => window.addEventListener('scroll', toggleVisible);
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


			<Container sx={{mt: 10}}>
				<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', flexWrap: 'wrap'}}>

					{/*!Select Genre*/}
					<FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
						<InputLabel id="xsw" children={'Genre'}/>
						<Select
							labelId="xsw"
							value={genre}
							onChange={({target}) => setGenre(target.value)}
							label="Genre">
							<MenuItem value="none" children={'None'}/>
							<MenuItem value={'28'} children={'Action'}/>
							<MenuItem value={'12'} children={'Adventure'}/>
							<MenuItem value={'16'} children={'Animation'}/>
							<MenuItem value={'35'} children={'Comedy'}/>
							<MenuItem value={'80'} children={'Crime'}/>
							<MenuItem value={'99'} children={'Documentary'}/>
							<MenuItem value={'18'} children={'Drama'}/>
							<MenuItem value={'10751'} children={'Family'}/>
							<MenuItem value={'14'} children={'Fantasy'}/>
							<MenuItem value={'36'} children={'History'}/>
							<MenuItem value={'27'} children={'Horror'}/>
							<MenuItem value={'10402'} children={'Music'}/>
							<MenuItem value={'9648'} children={'Mystery'}/>
							<MenuItem value={'10749'} children={'Romance'}/>
							<MenuItem value={'878'} children={'Science Fiction'}/>
							<MenuItem value={'10770'} children={'TV Movie'}/>
							<MenuItem value={'53'} children={'Thriller'}/>
							<MenuItem value={'10772'} children={'War'}/>
							<MenuItem value={'37'} children={'Western'}/>
						</Select>
					</FormControl>

					{/*!Select Sort Method*/}
					<FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
						<InputLabel id="demo-simple-select-standard-label" children={'Sorted By'}/>
						<Select
							labelId="demo-simple-select-standard-label"
							value={sortedBy}
							onChange={({target}) => setSortedBy(target.value)}
							label="Sorted By">
							<MenuItem value="none" children={'None'}/>
							<MenuItem value="popularity.asc" children={'Popularity Asc'}/>
							<MenuItem value="popularity.desc" children={'Popularity Dec'}/>
							<MenuItem value="release_date.asc" children={'Release Date Asc'}/>
							<MenuItem value="release_date.desc" children={'Release Date Dec'}/>
							<MenuItem value="revenue.asc" children={'Revenue Asc'}/>
							<MenuItem value="revenue.desc" children={'Revenue Dec'}/>
							<MenuItem value="primary_release_date.asc" children={'Primary Release Date Asc'}/>
							<MenuItem value="primary_release_date.desc" children={'Primary Release Date Dec'}/>
							<MenuItem value="original_title.asc" children={'Original Title Asc'}/>
							<MenuItem value="original_title.desc" children={'Original Title Dec'}/>
							<MenuItem value="vote_average.desc" children={'Vote Average  Dec'}/>
							<MenuItem value="vote_average.asc" children={'Vote Average  Asc'}/>
							<MenuItem value="vote_count.desc" children={'Vote Count  Dec'}/>
							<MenuItem value="vote_count.asc" children={'Vote Count  Asc'}/>
						</Select>
					</FormControl>

					{/*!Show Different Cards*/}
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
			<MovieCardsTypes data={data} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} cardType={cardType}/>
		</>

	);
};

export default AppMovies;