import React, {useEffect, useRef, useState} from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
import {Box} from "@mui/material";


const Cloud = (props) => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(GLOBE({
				el: myRef.current,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 300.00,
				minWidth: 300.00,
				scale: 1.00,
				scaleMobile: 1.00,
				color: 0x1976D2FF,
				color2:0xffffff,
				backgroundColor: 0x1a202f
			}))
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		}
	}, [vantaEffect]);

	return <Box sx={{position: 'absolute', height: '100vh', width: '100vw', zIndex: '9999'}} ref={myRef}/>
};

export default Cloud;
