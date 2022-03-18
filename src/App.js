import Main from "./Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import SingleCity from "./SingleCity";
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="container">
            <Link to="/"><h1 className="text-center">5-Day Forecast</h1></Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
        <Routes>
          <Route path="/city/:coor" element={<SingleCity></SingleCity>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
