import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorBoundary from "./misc/ErrorBoundary";
import AppMovies from "../pages/AppMovies";
import AppNotFound from "../pages/AppNotFound";
import AppDescription from "../pages/AppDescription";
import {HeaderInputContext} from "../context/HeaderInputContext";
import {useState} from "react";

function App() {
	const [cardType, setCardType] = useState(1);
	const [sortedBy, setSortedBy] = useState('');
	const [genre, setGenre] = useState('');

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<ErrorBoundary childElement={<HeaderInputContext.Provider value={{cardType,setCardType,sortedBy,setSortedBy,genre,setGenre}} children={<AppMovies/>}/>}/>}/>
					<Route path="/info/:type/:id" element={<ErrorBoundary childElement={<AppDescription/>}/>}/>
					<Route path="/*" element={<ErrorBoundary childElement={<AppNotFound/>}/>}/>
				</Routes>
			</div>
		</Router>)
}

export default App;
