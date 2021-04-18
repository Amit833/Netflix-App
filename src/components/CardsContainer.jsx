import React from "react";
import Cards from "./Cards";
import movieData from "../data/movieData";

const CardsContainer = ({ addMovieList }) => {
  const TheMovieData = movieData.map((movie) => (
    <Cards
      key={movie.id}
      name={movie.name}
      imgSrc={movie.imgSrc}
      title={movie.title}
      sname={movie.sname}
      link={movie.link}
      details={movie.details}
      addMovieList={addMovieList}
    />
  ));

  return <> {TheMovieData} </>;
};

export default CardsContainer;
