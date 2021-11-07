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
import MovieDetail from "./details/MovieDetail";
import GenresMovies from "./GenresMovies/GenresMovies";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import NotFound from "./not-found/NotFound";
import SideBar from "./sideBar/SideBar";

const App: React.FC = () => {
  const dispatch = useContext(DispatchContext);

  const getPopularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e0d07555e20e0345f6bd12869b2604e&page=1"
    ).then((res) => res.json());
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
          <Route path="/movie/:id" exact component={MovieDetail} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Route path="/genres/:id" exact component={GenresMovies} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
