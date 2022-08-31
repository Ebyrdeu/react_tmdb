import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useContext} from "react";
import {HeaderInputContext} from "../../../context/HeaderInputContext";

const Genre = () => {
	const {genre, setGenre} = useContext(HeaderInputContext);

	return <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
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
};

export default Genre;