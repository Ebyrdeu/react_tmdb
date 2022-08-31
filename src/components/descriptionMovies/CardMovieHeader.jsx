import React from 'react';
import {Box, Chip, CircularProgress, Container, Skeleton, Typography} from "@mui/material";
import styled from "styled-components";
import noImage from '../../assets/img/no-image.png'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useParams} from "react-router-dom";
import {useSingleMovie} from "../../hooks/useMovie";
import WhileLoading from "../misc/WhileLoading";

const HeaderCardWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
  flex-direction: column;
    align-items: center;
}
`

// ! Rating
const CircularProgressWithLabel = (props) =>  {
	return (
	<Box sx={{mr: 1}}>
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress variant="determinate" {...props} />
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant="caption" component="div" color="#7a858f">
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
		</Box>
	</Box>
	);
}


const CardMovieHeader = () => {
	const onSuccess = (data) => console.log(data?.data)

	const { id } = useParams();
	const {data, isLoading} = useSingleMovie(onSuccess, id);

	if (isLoading) return <WhileLoading/>

	const {title, overview, backdrop_path, poster_path, genres, release_date, vote_average, vote_count} = data?.data;


	//!  Genres
	const GenreChip = () => genres.map(({name}) => isLoading ? <Skeleton animation="wave" width={80} sx={{mr: 1}}/> : <Chip key={name} sx={{mr: 1, mt: 1, mb: 1}} label={name}/>)

	return (
		<Box sx={{background: 'white'}}>
			{isLoading ? <Skeleton animation="wave" variant="rectangular" width={'100vw'} height={400}/> : <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
			     alt={title} style={{width: '100vw', height: 400, objectFit: 'cover'}}
			     onError={(e)=>{ e.target.src=`${noImage}`}}/>}
			<Container>
				<HeaderCardWrapper>
					<Box sx={{marginTop: -15}}>
						{isLoading ? <Skeleton animation="wave" variant="rectangular" width={215} height={300}/> :
							<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						     alt={title}
						     onError={(e)=>{ e.target.src=`${noImage}`}}
						     style={{width: 215, height: 300, objectFit: 'cover'}}/>}
						<Box display={'flex'} sx={{justifyContent: 'space-between', mt: 1}}>
							{isLoading ? <Skeleton animation="wave" width={80} /> :<Typography variant='subtitle2' sx={{color: '#7a858f', marginBottom: 2, display: 'flex', alignItems: 'center', justifyContent: "center"}}>
								<ThumbUpIcon sx={{mr: 1}}/>
								{vote_count}
							</Typography> }
							{isLoading ? <Skeleton animation="wave" width={80} /> :<Typography align={'right'} variant='subtitle1' sx={{color: '#7a858f', marginBottom: 2}} children={release_date}/>}
						</Box>
					</Box>
					<Box sx={{marginLeft: 3, marginTop: 2.5}}>
						<Box sx={{display: 'flex', alignItems: 'center'}}>
							<CircularProgressWithLabel value={vote_average * 10} />
							{isLoading ? <Skeleton animation="wave" width={128} /> :	<Typography variant='h6' sx={{color: '#5c728a', maxWidth: 900, }} children={title}/>}
						</Box>
						{isLoading ? <Box>
							<Skeleton animation="wave" width={568}/>
							<Skeleton animation="wave" width={538}/>
							<Skeleton animation="wave" width={518}/>
							<Skeleton animation="wave" width={548}/>
						</Box> : <Typography variant='subtitle1' sx={{color: '#7a858f', maxWidth: 900,}} children={overview}/>}
						<Box sx={{display: 'flex'}} children={<GenreChip />}/>
					</Box>
				</HeaderCardWrapper>
			</Container>
		</Box>
	);
};

export default CardMovieHeader;