import React, { useContext } from "react";
// import Movie from "./Movie";
import MovieContext from "./context/MovieContext";

const MovieList = () => {
  const value = useContext(MovieContext);
  return (
    <div>
      <h1>{value}</h1>
      {/* {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))} */}
    </div>
  );
};

export default MovieList;
