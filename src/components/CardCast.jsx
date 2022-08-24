import React from 'react';
import {useParams} from "react-router-dom";
import {useCredits} from "../hooks/useMovie";
import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Skeleton, Typography} from "@mui/material";
import noImage from "../assets/img/no-image.png";

const CardCast = () => {
	const onSuccess = (data) => console.log(data?.data)

	const {id} = useParams();
	const {data, isLoading, isError} = useCredits(onSuccess, id);


	const RenderedCastCards = () => {
		return data?.data.cast.map(({id, name, character, profile_path}) => {
			return (<Card key={id} sx={{width: 180, mr: 2, mt: 3}}>
				<CardActionArea>
					{isLoading ? <Skeleton variant="rectangular" width={180} height={200}/> : <CardMedia
						sx={{height: '200px', objectPosition: 'top'}}
						component="img"
						image={`https://image.tmdb.org/t/p/w500/${profile_path}`}
						onError={(e) => e.target.src = `${noImage}`}
						alt={name}/>}

					<CardContent>
						{isLoading ? <Skeleton animation="wave" width={140} /> :
							<Typography gutterBottom variant="h5" component="div" children={name}/>}
						{isLoading ? <Skeleton animation="wave" width={110}/> :
							<Typography variant="body2" color="text.secondary" children={character}/>}


					</CardContent>
				</CardActionArea>
			</Card>)
		})
	}
	return <Container children={<Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} children={<RenderedCastCards/>}/>}/>

};

export default CardCast;