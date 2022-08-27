import {Box, Button, Container, Typography} from "@mui/material";
import {NavLink, useNavigate} from 'react-router-dom';
import Globe from "../components/background_animations/Globe";


const AppNotFound = () => {
	// Hooks
	const navigate = useNavigate();


	// Render
	return (<>
		{/*BG*/}
		<Globe/>
		{/*Content*/}
		<Container sx={{height: 'calc(100vh - 56px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			{/*Text*/}
			<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '999999'}}>
				<Typography sx={{zIndex: '999999'}} color={'white'} align={'center'} variant="h3" children={'404 - PAGE NOT FOUND'}/>
				<Typography color={'white'} variant="subtitle1" children={'We looked everywhere for this page.'}/>
				<Typography color={'white'} variant="subtitle1" children={'Are you sure the website URL is correct?'}/>

				{/*	Buttons*/}
				<Box sx={{display: 'flex'}}>
					<Button sx={{mr: 2}} variant="outlined" color={'info'}
					        children={<NavLink style={{textDecoration: 'none', color: '#0288d1'}} to={'/'} children={'Go to Home Page'}/>}/>
					<Button variant="outlined" color={'info'} onClick={() => navigate(-1)} children={'Go back to the previous page'}/>
				</Box>
			</Box>

		</Container>

	</>);
};

export default AppNotFound;