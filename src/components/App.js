import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import AppActors from "../pages/AppActors";
import AppMovies from "../pages/AppMovies";
import AppNotFound from "../pages/AppNotFound";
import AppNavBar from "./AppNavBar";

function App() {
  return (
      <Router>
        <div className="App">
            <AppNavBar/>
            <Routes>
              <Route path="/" element={<ErrorBoundary childElement={<AppMovies/>}/>}/>
              <Route path="/actors" element={<ErrorBoundary childElement={<AppActors/>}/>}/>
              <Route path="/*" element={<ErrorBoundary childElement={<AppNotFound/>}/>}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
