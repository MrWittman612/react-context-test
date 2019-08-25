import React, { useState } from "react";

const MovieList = () => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 231234
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124
    },
    {
      name: "Inception",
      price: "$10",
      id: 231524
    }
  ]);
  return (
    <div>
      <h1>hello</h1>
      {movies.map(movie => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default MovieList;
