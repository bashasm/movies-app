import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { loadMoviesList, loadPopularMovies } from "../context/actions/movies";
import { DispatchContext } from "../context/GlobalState";
import "./App.css";
import Home from "./Home.jsx";
import Movie from "./Movie.jsx";
import NavBar from "./NavBar";
import NotFound from "./NotFound.jsx";
import SideBar from "./SideBar/SideBar.jsx";

function App() {
  const dispatch = useContext(DispatchContext);

  const getPopularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e0d07555e20e0345f6bd12869b2604e&page=1"
    ).then((res) => res.json());
    console.log(movies);
    // Load Popular Movies
    dispatch(loadPopularMovies(movies));
  };

  const getMoviesList = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4e0d07555e20e0345f6bd12869b2604e"
    ).then((res) => res.json());
    // Load Movies List
    dispatch(loadMoviesList(movies?.genres));
  };

  useEffect(() => {
    getPopularMovies();
    getMoviesList();
  }, []);

  return (
    <Router>
      <SideBar />
      <div className="content-container">
        <NavBar />
        <Switch>
          <Route path="/movie" exact component={Movie} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
