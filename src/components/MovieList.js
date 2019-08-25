import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
