import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useContext} from "react";
import {HeaderInputContext} from "../../../context/HeaderInputContext";

const Sort = () => {
	const {sortedBy, setSortedBy} = useContext(HeaderInputContext);
	return 	<FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
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
};

export default Sort;