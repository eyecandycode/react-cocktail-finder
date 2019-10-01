import React, { useState, useEffect } from "react";

function Favourites(props) {
  const [update, setUpdate] = useState("");
  //   const [favfav, setFavFav] = useState("");
  const drinks = JSON.parse(localStorage.getItem("drinks"));
  const favsLS = localStorage.getItem("drinks");

  useEffect(() => {
    //     if (favsLS && favsLS.length > 15) {
    //       setFavFav(props.favs);
    //     }
  }, []);

  const remove = id => {
    setUpdate(id);
    // let drinkUpdate = [];
    drinks.forEach((drink, index) => {
      if (id === drink.id) {
        drinks.splice(index, 1);
      }
      //   drinkUpdate = drinks;
    });
    localStorage.setItem("drinks", JSON.stringify(drinks));
  };

  return (
    <div className='page'>
      <div className='field'>
        <br />
        <h1>Favourites</h1>
        <br />
        <br />
        <div className='cocktails'>
          {drinks
            ? drinks.map(drink => (
                <div key={drink.id} className='card'>
                  <h2>{drink.name}</h2>
                  <br />
                  <button className='fav-btn' onClick={() => remove(drink.id)}>
                    X
                  </button>
                  <img className='fav-img' src={drink.image} alt='' />
                  <br />
                  <br />
                  <br />
                  <h4>Ingredients:</h4>
                  <p>
                    {drink.ingredient1} {drink.measure1}{" "}
                  </p>
                  <p>
                    {drink.ingredient2} {drink.measure2}{" "}
                  </p>
                  <p>
                    {drink.ingredient3} {drink.measure3}{" "}
                  </p>
                  <p>
                    {drink.ingredient4} {drink.measure4}{" "}
                  </p>
                  <p>
                    {drink.ingredient5} {drink.measure5}{" "}
                  </p>
                  <p>
                    {drink.ingredient6} {drink.measure6}{" "}
                  </p>
                  <p>
                    {drink.ingredient7} {drink.measure7}{" "}
                  </p>
                  <p>
                    {drink.ingredient8} {drink.measure8}{" "}
                  </p>
                  <p>
                    {drink.ingredient9} {drink.measure9}{" "}
                  </p>
                  <p>
                    {drink.ingredient10} {drink.measure10}{" "}
                  </p>
                  <p>
                    {drink.ingredient11} {drink.measure11}{" "}
                  </p>
                  <p>
                    {drink.ingredient12} {drink.measure12}{" "}
                  </p>
                  <br />
                  <h4>Glass: </h4> <span>{drink.glass}</span>
                  <br />
                  <br />
                  <h4>Instructions:</h4>
                  <p>{drink.instructions}</p>
                  <br /> <br /> <br />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
