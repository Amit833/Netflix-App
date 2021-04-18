import React, { useState } from "react";
import Header from "./Header";
import Cardscontainer from "./CardsContainer.jsx";
import Footer from "./Footer";
import "../css/App.css";

function App() {
  // add movie to my Basket
  const [addMovie, setAddMovie] = useState(0);
  const addMovieList = () => {
    setAddMovie(addMovie + 1);
    alert("You Can Watch Now!")
  };



  return (
    <main>
      <Header addMovie={addMovie} />
      <Cardscontainer addMovieList={addMovieList} />
      <Footer />
    </main>
  );
}

export default App;
