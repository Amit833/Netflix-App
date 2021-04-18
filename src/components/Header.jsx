import React from "react";

import { RiShoppingBasketLine } from "react-icons/ri";

const Header = ({ addMovie }) => {
  return (
    <section className="header">
      <div className="titleContainer">
        <h1>Netflix Series</h1>
      </div>

      <div className="iconContainer">
        <RiShoppingBasketLine className="basketIcon"></RiShoppingBasketLine>
        <h4>{addMovie}</h4>
      </div>
    </section>
  );
};

export default Header;
