import React from 'react';
import {Box, LinearProgress} from "@mui/material";

const WhileLoading = () => <Box sx={{ width: '100%', position: 'sticky', top: 0, zIndex: 999999999999}} children={<LinearProgress />}/>

export default WhileLoading;