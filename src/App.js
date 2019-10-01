import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Ingredient from "./components/Ingredient";
import Favourites from "./components/Favourites";

function App() {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [item, setItem] = useState("");
  const [favourites, setFavourites] = useState([]);

  const favsLS = localStorage.getItem("drinks");

  useEffect(() => {
    if (favsLS && favsLS.length > 15) {
      setFavourites(JSON.parse(localStorage.getItem("drinks")).filter(n => n));
    }
  }, []);

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem("drinks")));
    if (!JSON.stringify(favourites).includes(item.id)) {
      setFavourites(favourites => [...favourites, item].filter(n => n));
    } else {
      favourites.forEach((drink, index) => {
        let favs = favourites.filter(n => n);
        if (item.id === drink.id) {
          favs.splice(index, 1);
          setFavourites(favs);
        }
      });
    }
  }, [item]);

  useEffect(() => {
    localStorage.setItem("drinks", JSON.stringify(favourites));
  }, [favourites]);

  // const toggle = itemID => {
  //   setLoading(!loading);
  // };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // setLoading(true);
    let cocktail = input;
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    const data = await res.json();
    setData(data.drinks);
    setInput("");
    // setLoading(false);
  };

  return (
    <Router>
      <div className='app'>
        <header>
          <h1>Cocktail Finder</h1>
          <span>
            <Link to='/'>Search by Name</Link> |{" "}
            {/* <Link to='/ingredient'>Search by Ingredient</Link> |{" "} */}
            <Link to='/favourites'>Favourites</Link>{" "}
          </span>
        </header>
        <Route
          exact
          path='/'
          render={props => (
            <div className='page'>
              <div className='field'>
                <h2>Search for a cocktail</h2>
                <br />
                <form onSubmit={handleSubmit}>
                  <input
                    placeholder={"Enter..."}
                    value={input}
                    onChange={handleChange}
                  />
                  <input type='submit' value='Submit' />
                </form>
                <div className='cocktails'>
                  <br /> <br />
                  {data
                    ? data.map((item, i) => (
                        <div key={item.idDrink} className='card'>
                          <br />
                          <h1>{item.strDrink}</h1>
                          <br />
                          <div>
                            <button
                              className='fav-btn'
                              onClick={() => {
                                setItem({
                                  id: item.idDrink,
                                  name: item.strDrink,
                                  image: item.strDrinkThumb,
                                  glass: item.strGlass,
                                  instructions: item.strInstructions,
                                  ingredient1: item.strIngredient1,
                                  ingredient2: item.strIngredient2,
                                  ingredient3: item.strIngredient3,
                                  ingredient4: item.strIngredient4,
                                  ingredient5: item.strIngredient5,
                                  ingredient6: item.strIngredient6,
                                  ingredient7: item.strIngredient7,
                                  ingredient8: item.strIngredient8,
                                  ingredient9: item.strIngredient9,
                                  ingredient10: item.strIngredient10,
                                  ingredient11: item.strIngredient11,
                                  ingredient12: item.strIngredient12,
                                  measure1: item.strMeasure1,
                                  measure2: item.strMeasure2,
                                  measure3: item.strMeasure3,
                                  measure4: item.strMeasure4,
                                  measure5: item.strMeasure5,
                                  measure6: item.strMeasure6,
                                  measure7: item.strMeasure7,
                                  measure8: item.strMeasure8,
                                  measure9: item.strMeasure9,
                                  measure10: item.strMeasure10,
                                  measure11: item.strMeasure11,
                                  measure12: item.strMeasure12
                                });
                              }}
                            >
                              {JSON.stringify(favourites).includes(item.idDrink)
                                ? "X"
                                : "+"}
                            </button>

                            <img
                              className='cocktailImg'
                              src={item.strDrinkThumb}
                              alt=''
                            />
                          </div>
                          <br />
                          <br />
                          <h4>Ingredients:</h4>
                          <p>
                            {item.strIngredient1} {item.strMeasure1}{" "}
                          </p>
                          <p>
                            {item.strIngredient2} {item.strMeasure2}{" "}
                          </p>
                          <p>
                            {item.strIngredient3} {item.strMeasure3}{" "}
                          </p>
                          <p>
                            {item.strIngredient4} {item.strMeasure4}{" "}
                          </p>
                          <p>
                            {item.strIngredient5} {item.strMeasure5}{" "}
                          </p>
                          <p>
                            {item.strIngredient6} {item.strMeasure6}{" "}
                          </p>
                          <p>
                            {item.strIngredient7} {item.strMeasure7}{" "}
                          </p>
                          <p>
                            {item.strIngredient8} {item.strMeasure8}{" "}
                          </p>
                          <p>
                            {item.strIngredient9} {item.strMeasure9}{" "}
                          </p>
                          <p>
                            {item.strIngredient10} {item.strMeasure10}{" "}
                          </p>
                          <p>
                            {item.strIngredient11} {item.strMeasure11}{" "}
                          </p>
                          <p>
                            {item.strIngredient12} {item.strMeasure12}{" "}
                          </p>
                          <br />
                          <h4>Glass: </h4> <span>{item.strGlass}</span>
                          <br />
                          <br />
                          <h4>Instructions:</h4>
                          <p>{item.strInstructions}</p>
                          <br /> <br /> <br />
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          )}
        />
        <Route path='/ingredient' component={Ingredient} />
        <Route path='/favourites' component={Favourites} />
        {/* <Route
          path='/favourites'
          render={props => <Favourites favs={favourites} />}
        /> */}

        <footer>
          <h6>Powered by TheCocktailDB API</h6>
        </footer>
      </div>
    </Router>
  );
}

export default App;
