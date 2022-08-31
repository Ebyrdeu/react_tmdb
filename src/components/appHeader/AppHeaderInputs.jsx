import React from 'react';
import {Box, Container} from "@mui/material";
import SearchBar from "./Buttons/SearchBar";
import Genre from "./Buttons/Genre";
import Sort from "./Buttons/Sort";
import Types from "./Buttons/Types";





const AppHeaderInputs = () => {
	return (
		<Container sx={{mt: 10}}>
			<SearchBar/>
			<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', flexWrap: 'wrap'}}>
				{/*!Select Genre*/}
				<Genre/>
				{/*!Select Sort Method*/}
				<Sort/>
				{/*!Show Different Cards*/}
				<Types/>
			</Box>
		</Container>
	);
};

export default AppHeaderInputs;