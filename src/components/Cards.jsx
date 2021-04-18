import React, { useState } from "react";
import Details from "./Details";

const Cards = ({ name, imgSrc, title, sname, link, details, addMovieList }) => {
  const [show, setShow] = useState(false);

  const detailsList = details.map((movieDetail, index) => (
    <Details key={index} detail1={movieDetail} />
  ));

  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={imgSrc} alt="myPic" className="card_img" />

          <div className="card_info">
            <span className="card_category"> {title}</span>
            <h3 className="card_title"> {sname} </h3>

            <div>
              <h4
                onMouseEnter={() => setShow(!show)}
                onMouseLeave={() => setShow(!show)}
              >
                details
              </h4>
              {show && <ul> {detailsList} </ul>}
            </div>

            <button onClick={() => addMovieList()}>Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
