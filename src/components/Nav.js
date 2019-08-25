import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
const Nav = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h3>hello</h3>
      <p>List of Movies: {movies.length}</p>
    </nav>
  );
};

export default Nav;
