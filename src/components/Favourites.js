import React, { useState, useEffect } from "react";
import Card from "./Card";

function Favourites(props) {
  const [update, setUpdate] = useState("");
  //   const [favfav, setFavFav] = useState("");
  const drinks = JSON.parse(localStorage.getItem("drinks"));
  const favsLS = localStorage.getItem("drinks");

  const remove = id => {
    setUpdate(id);
    drinks.forEach((drink, index) => {
      if (id === drink.idDrink) {
        drinks.splice(index, 1);
      }
    });
    localStorage.setItem("drinks", JSON.stringify(drinks));
  };

  return (
    <div className="page">
      <div className="field">
        <h1 style={{ margin: "1.2rem 0" }}>Favourites</h1>
        <div className="cocktails">
          {drinks.length > 0 ? (
            drinks.map(drink => (
              <div key={drink.idDrink} className="card">
                <h2>{drink.strDrink}</h2>
                <br />
                <button
                  className="fav-btn"
                  onClick={() => remove(drink.idDrink)}
                >
                  X
                </button>
                <img className="fav-img" src={drink.strDrinkThumb} alt="" />
                <Card item={drink} />
              </div>
            ))
          ) : (
            <p>No favourites selected...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
