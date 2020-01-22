import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Ingredient from "./components/Ingredient";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import Item from "./components/Item";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [item, setItem] = useState("");
  const [favourites, setFavourites] = useState([]);

  const favsLS = localStorage.getItem("drinks");

  // On page load get favs from localStorage
  useEffect(() => {
    if (favsLS && favsLS.length > 15) {
      setFavourites(JSON.parse(localStorage.getItem("drinks")).filter(n => n));
    }
  }, []);

  // Handle CRUD - save in localStorage
  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem("drinks")));
    if (!JSON.stringify(favourites).includes(item.idDrink)) {
      setFavourites(favourites => [...favourites, item].filter(n => n));
    } else {
      favourites.forEach((drink, index) => {
        let favs = favourites.filter(n => n);
        if (item.idDrink === drink.idDrink) {
          favs.splice(index, 1);
          setFavourites(favs);
        }
      });
    }
  }, [item]);

  useEffect(() => {
    localStorage.setItem("drinks", JSON.stringify(favourites));
  }, [favourites]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let cocktail = input;
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
    );
    const data = await res.json();
    setData(data.drinks);
    setInput("");
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <div className="page">
              <div className="field">
                <h2>Search for a cocktail</h2>
                <Form
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  input={input}
                />
                <div className="cocktails">
                  {data
                    ? data.map((item, i) => (
                        <div key={item.idDrink} className="card">
                          <h1 style={{ margin: "1rem 0 1.6rem 0" }}>
                            {item.strDrink}
                          </h1>
                          <div>
                            <Item
                              setItem={setItem}
                              item={item}
                              favourites={favourites}
                            ></Item>
                            <img
                              className="cocktailImg"
                              src={item.strDrinkThumb}
                              alt=""
                            />
                          </div>
                          <Card item={item} />
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          )}
        />
        <Route path="/ingredient" component={Ingredient} />
        <Route path="/favourites" component={Favourites} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
