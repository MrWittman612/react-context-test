import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  //  eslint-disable-next-line no-unused-vars
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
