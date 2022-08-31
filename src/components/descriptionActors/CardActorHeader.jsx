import React from 'react';
import {useParams} from "react-router-dom";
import {useActors} from "../../hooks/useMovie";
import {Box, Container, Skeleton, Typography} from "@mui/material";
import noImage from "../../assets/img/no-image.png";
import styled from "styled-components";
import WhileLoading from "../misc/WhileLoading";

const HeaderCardWrapper = styled.div`
  display: flex;
	
  @media (max-width: 768px) {
  flex-direction: column;
    align-items: center;
    .changeME {
      margin-bottom: 0;
    }
}
`


const CardActorHeader = () => {

	const onSuccess = (data) => console.log(data?.data)

	const { id } = useParams();

	const {data, isLoading} = useActors(onSuccess, id);

	if (isLoading) return <WhileLoading/>

	const {name, biography, birthday, profile_path} = data?.data;

	return (
		<Box sx={{background: 'white'}}>
			<Container>
				<HeaderCardWrapper>
					<Box className={'changeME'} sx={{marginBottom: -15, padding: 2}}>
						{isLoading ? <Skeleton animation="wave" variant="rectangular" width={215} height={300}/> :
							<img src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
							     alt={name}
							     onError={(e)=>{ e.target.src=`${noImage}`}}
							     style={{width: 215, height: 300, objectFit: 'cover'}}/>}
						<Box sx={{mt: 1}}>
							{isLoading ? <Skeleton animation="wave" width={80} /> :<Typography align={'right'} variant='subtitle1' sx={{color: '#7a858f', marginBottom: 2}} children={birthday}/>}
						</Box>
					</Box>
					<Box sx={{marginLeft: 3, marginTop: 2.5}}>
						{isLoading ? <Skeleton animation="wave" width={128} /> :	<Typography variant='h6' sx={{color: '#5c728a', maxWidth: 900, }} children={name}/>}
						{isLoading ? <Box>
							<Skeleton animation="wave" width={568}/>
							<Skeleton animation="wave" width={538}/>
							<Skeleton animation="wave" width={518}/>
							<Skeleton animation="wave" width={548}/>
						</Box> : <Typography variant='subtitle1' sx={{color: '#7a858f', maxWidth: 900,}} children={biography}/>}
					</Box>
				</HeaderCardWrapper>
			</Container>
		</Box>
	);
};

export default CardActorHeader;