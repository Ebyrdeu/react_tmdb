import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import AppMovies from "../pages/AppMovies";
import AppNotFound from "../pages/AppNotFound";
import AppDescription from "../pages/AppDescription";

function App() {

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<ErrorBoundary childElement={<AppMovies/>}/>}/>
					<Route path="/info/:type/:id" element={<ErrorBoundary childElement={<AppDescription/>}/>}/>
					<Route path="/*" element={<ErrorBoundary childElement={<AppNotFound/>}/>}/>
				</Routes>
			</div>
		</Router>)
}

export default App;
