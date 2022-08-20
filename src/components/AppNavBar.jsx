import React from 'react';
import {AppBar, Box, Button, Slide, Toolbar, useScrollTrigger} from "@mui/material";
import {Link} from "react-router-dom";
import logo from '../assets/img/logo/TMDB_REACT_LOGO.svg'

function HideOnScroll(props) {
	const {children, window} = props;
	const trigger = useScrollTrigger({target: window ? window() : undefined,});
	return <Slide appear={false} direction="down" in={!trigger} children={children}/>
}

const AppNavBar = (props) => <HideOnScroll {...props}>
		<AppBar  component="nav" style={{background: '#1d1c19'}}>
			<Toolbar sx={{display: "flex"}}>
				<Box sx={{flexGrow: 1}} children={<Link to='/' style={{color: 'white', marginLeft: '20px'}} children={<img style={{width: '100px'}} src={logo} alt="REACT TMDB"/>}/>}/>
				<Box>
					<Link to='/' style={{color: 'white', marginLeft: '20px', textDecoration: 'none'}} children={<Button style={{color: 'white'}}>Movies</Button>}/>
					<Link to='/actors' style={{color: 'white', marginLeft: '20px', textDecoration: 'none'}} children={<Button style={{color: 'white'}}>Actors</Button>}/>
				</Box>
			</Toolbar>

		</AppBar>

	</HideOnScroll>

export default AppNavBar;