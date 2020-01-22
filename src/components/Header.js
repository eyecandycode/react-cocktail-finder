import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 style={{ marginBottom: "0.5rem" }}>Cocktail Finder</h1>
      <span>
        <Link to="/">Search by Name</Link>&nbsp;&nbsp;
        <span style={{ color: "rgba(255,255,255,0.6)" }}>|</span>
        &nbsp;&nbsp;
        {/* <Link to='/ingredient'>Search by Ingredient</Link> |{" "} */}
        <Link to="/favourites">Favourites</Link>{" "}
      </span>
    </header>
  );
}

export default Header;
