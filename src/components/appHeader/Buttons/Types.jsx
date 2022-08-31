import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ViewListIcon from "@mui/icons-material/ViewList";
import {useContext} from "react";
import {HeaderInputContext} from "../../../context/HeaderInputContext";

const Types = () => {
	const {cardType, setCardType} = useContext(HeaderInputContext);

	return <ToggleButtonGroup
		color="primary"
		value={cardType}
		sx={{m: 1}}
		exclusive
		onChange={(e, newCardType) => setCardType(newCardType)}
		aria-label="Card Type">
		<ToggleButton value={1} aria-label="left aligned" children={<ViewModuleIcon/>}/>
		<ToggleButton value={2} aria-label="left aligned" children={<ViewComfyIcon/>}/>
		<ToggleButton value={3} aria-label="left aligned" children={<ViewListIcon/>}/>
	</ToggleButtonGroup>
};

export default Types;