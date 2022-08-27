import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useMovieCredits} from "../../hooks/useMovie";
import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Skeleton, Typography} from "@mui/material";
import noImage from "../../assets/img/no-image.png";

const CardMovies = () => {
	const onSuccess = (data) => console.log(data?.data)

	const {id} = useParams();
	const {data, isLoading} = useMovieCredits(onSuccess, id);

	const CardMovies = () => {
		return data?.data.cast.map(({id, title, character, poster_path}) => {
			return (<Card as={Link}
			              to={`/info/movies/${id}`} key={id} sx={{width: 180, mr: 2, mt: 3, textDecoration: 'none', background: '#fafafafa', color: '#5c728a'}}>
				<CardActionArea>
					{isLoading ? <Skeleton variant="rectangular" width={180} height={200}/> : <CardMedia
						sx={{height: '200px', objectPosition: 'top'}}
						component="img"
						image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						onError={(e) => e.target.src = `${noImage}`}
						alt={title}/>}

					<CardContent>
						{isLoading ? <Skeleton animation="wave" width={140} /> :
							<Typography gutterBottom variant="h5" component="div" children={title}/>}
						{isLoading ? <Skeleton animation="wave" width={110}/> :
							<Typography variant="body2" color="text.secondary" children={character}/>}


					</CardContent>
				</CardActionArea>
			</Card>)
		})
	}
	return <Container children={<Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 15}} children={<CardMovies/>}/>}/>
};

export default CardMovies;