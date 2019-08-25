import React from "react";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./context/MovieContext";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
