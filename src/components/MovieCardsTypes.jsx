import {Box, Card, CardActionArea, CardContent, CardMedia, Container, Rating, Tooltip, Typography} from "@mui/material";
import styled, {keyframes} from 'styled-components';
import {Link} from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {slideInLeft, zoomIn} from 'react-animations';
import noImage from '../assets/img/no-image.png'
import {Fragment} from "react";

const zoomInAnimation = keyframes`${zoomIn}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 0.5s ${slideInLeftAnimation};
  margin: 10px;
`;
const BouncyDiv = styled.div`
  animation: 0.5s ${zoomInAnimation};
  margin: 10px;
`;

const MovieCardsTypes = ({data, cardType, hasNextPage}) => {
	const item1 = data?.pages.map(({data}, i) => {
		return <Fragment key={i} children={data.results.map(({id, title, backdrop_path, poster_path, vote_average, vote_count, release_date}) => {
			const renderedCards = <Card
				as={Link}
				to={`info/movies/${id}`}
				sx={{width: 610, position: 'relative', textDecoration: 'none'}}>
				<CardMedia component="img"
				           height="300"
				           image={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
				           alt={title}
				           onError={(e) => e.target.src = `${noImage}`}/>
				<CardContent>
					<CardMedia component="img"
					           height="260"
					           image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
					           alt={title}
					           sx={{position: 'absolute', left: 10, bottom: 10, width: 180}}
					           onError={(e) => e.target.src = `${noImage}`}/>
					<Box sx={{pl: 24}}>
						<Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
							<Box>
								<Typography variant='subtitle1' sx={{color: '#647380', width: 220}} children={title}/>
								<Rating
									readOnly
									sx={{color: '#ebb62d'}}
									value={vote_average - 4}
									precision={0.1}
									emptyIcon={<GradeIcon style={{opacity: 0.2}} fontSize="inherit"/>}/>
							</Box>
							<Box>
								<Typography variant='subtitle2' sx={{color: '#647380'}} children={release_date}/>
								<Typography variant='subtitle2' sx={{color: '#647380'}} children={`Votes: ${vote_count}`}/>
							</Box>

						</Box>
					</Box>
				</CardContent>
			</Card>
			return <BouncyDiv style={{background: '#FAFAFA'}} key={id} children={renderedCards}/>
		})}/>
	})

	const item2 = data?.pages.map(({data}, i) => {
		return <Fragment key={i} children={data.results.map(({id, title, poster_path, vote_average, overview, release_date}) => {
			const renderedCards = <Tooltip
				arrow
				title={<Box>
					<Typography variant='h6' children={title}/>
					<Typography variant='subtitle2' children={`Rating: ${vote_average * 10}%`}/>
					<Typography variant='subtitle2' children={`Release Date: ${release_date}`}/>
					<Typography variant='subtitle2' children={overview}/>
				</Box>} placement="right">
				<Card
					as={Link}
					to={`info/movies/${id}`}
					sx={{m: 1, textDecoration: 'none', width: 180}}>
					<CardMedia component="img"
					           height="260"
					           image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
					           alt={title}
					           sx={{width: 180}}
					           onError={(e) => e.target.src = `${noImage}`}/>
					<Typography variant='subtitle2' sx={{color: '#647380'}} children={title}/>
				</Card>
			</Tooltip>
			return <BouncyDiv key={id} children={<Container sx={{display: 'flex', width: 'auto',}} children={renderedCards}/>}/>
		})}/>
	})

	const item3 = data?.pages.map(({data}, i) => {
		return <Fragment key={i} children={data.results.map(({id, title, poster_path, vote_average, vote_count, release_date}) => {
			const renderedCards = <SlideInLeftDiv children={<Card
				as={Link}
				to={`info/movies/${id}`}
				sx={{textDecoration: 'none'}}>
				<CardActionArea sx={{pr: 2, background: '#fafafa', boxShadow: '0px 0px 10px #64738054'}}>
					<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
						<Box sx={{display: 'flex', alignItems: 'center', minWidth: 500}}>
							<CardMedia
								component="img"
								image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
								alt={title}
								sx={{width: 48, mr: 1}}
								onError={(e) => e.target.src = `${noImage}`}/>
							<Typography variant='subtitle2' sx={{color: '#647380'}} children={title}/>
						</Box>
						<Typography variant='subtitle2' sx={{color: '#647380'}} children={release_date}/>
						<Box sx={{pr: 1}}>
							<Typography variant='subtitle2' sx={{color: '#647380'}} children={`Rating: ${vote_average * 10}%`}/>
							<Typography variant='subtitle2' sx={{color: '#8ba0b2'}} children={`Votes: ${vote_count} `}/>
						</Box>
					</Box>
				</CardActionArea>
			</Card>}/>

			return <Container key={id} sx={{width: "100%"}} children={renderedCards}/>
		})}/>
	})
	return (<>
		<Box sx={{mt: 10, display: "flex", justifyContent: 'center', flexWrap: 'wrap'}}>
			{cardType === 1 ? item1 : null}
			{cardType === 2 ? item2 : null}
			{cardType === 3 ? item3 : null}
		</Box>
		<Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
			<Typography variant='subtitle2' sx={{color: '#647380', mt: 5, userSelect: 'none'}}
			            children={hasNextPage ? 'Scroll down to load more movies' : 'You Psycho Scrolled all movies'}/>
			<KeyboardDoubleArrowDownIcon sx={{color: '#647380', mb: 19}}/>
		</Box>
	</>)
};

export default MovieCardsTypes;