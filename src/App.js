import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Ingredient from './components/Ingredient';
import Favourites from './components/Favourites';

function App() {
  const toggleButton = React.useRef(null);
  // const initialArr = JSON.stringify(localStorage.getItem('drinksTesting')) || 0

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [input, setInput] = useState('')
  const [item, setItem] = useState('')
  const [toggleBtns, setToggleBtns] = useState(null)
  const [favourites, setFavourites] = useState([])
  const favsLS = localStorage.getItem('drinks')

  useEffect(() => {
    if (favsLS && favsLS.length > 15) {
      console.log('1')
      setFavourites(JSON.parse(favsLS))
    } else { console.log('2') }
  }, [item])

  useEffect(() => {
    setFavourites(favourites.filter(Boolean))
    console.log(item.id)
    if (!JSON.stringify(favourites).includes(item.id)) {
      setFavourites(favourites => [...favourites, item])
      console.log('1')
    } else {
      console.log(Object.keys(favourites))

      favourites.forEach((drink, index) => {
        let favs = favourites
        if (item.id === drink.id) {
          favs.splice(index, 1)
          console.log(favs)
          setFavourites(favs)
        }
      }
      )
    }

    // console.log(favourites)

  }, [item])

  let favStorage = []
  useEffect(() => {
    // console.log('Bang! FAV! ' + favourites)
    localStorage.setItem('drinks', JSON.stringify(favourites));

    console.log(favourites)
    favStorage = favourites
    console.log(favStorage)
  }, [favourites, loading])

  // useEffect(() => {
  // setToggleBtns({ [item.id]: ![item.id] })
  // console.log(toggleBtns)
  // }, [item])

  const toggle = (itemID) => {

    // if localstate includes id of e.target.value display x
    //if ()
    // console.log(e.target.value)
    // toggleButton.current.value()
    console.log('hello from toggle')
    // toggleButton.current.focus()
    // setToggleBtns({ [itemID]: !toggleBtns })
    // console.log('togBUT ' + JSON.stringify(toggleBtns))
    setLoading(!loading)

  }

  const add = (itemID, name, image) => {
    setItem({ id: itemID, name: name, image: image })
    if (!JSON.stringify(favourites).includes(item.id)) {
      setFavourites(favourites => [...favourites, item])
    }
  }

  const remove = (itemID, name, image) => {
    setItem({ id: itemID, name: name, image: image })
    if (JSON.stringify(favourites).includes(itemID)) {
      favourites.forEach((drink, index) => {
        if (itemID === drink.id) {
          favourites.splice(index, 1);
        }
      });
    }
    console.log(favourites)
  }


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)
    let cocktail = input;
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    const data = await res.json()

    setData(data.drinks)
    setInput('')
    setLoading(false)
  }

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Cocktail Finder</h1>
          <span><Link to='/'>Search by Name</Link> |{' '}
            <Link to='/ingredient'>Search by Ingredient</Link> |{' '}
            <Link to='/favourites'>Favourites</Link> </span>

        </header>

        <Route exact path='/' render={props => (

          <div className="page">
            <div className="field">
              <h3>Search for a cocktail</h3>
              <br />
              <form onSubmit={handleSubmit}>
                <input
                  placeholder={'Enter...'}
                  value={input}
                  onChange={handleChange}
                />
                <input type="submit" value="Submit" />
              </form>
              <div className="cocktails">
                <br /> <br />
                {data ? data.map((item, i) => (
                  <div key={item.idDrink} className="card">
                    <br />
                    <h3>{item.strDrink}</h3>
                    <br />
                    <div>
                      <button onClick={() => setItem({ id: item.idDrink, name: item.strDrink, image: item.strDrinkThumb })}>setItem</button>
                      {/* <button onClick={() => add(item.idDrink, item.strDrink, item.strDrinkThumb)}>ADD</button>
                      <button onClick={() => remove(item.idDrink, item.strDrink, item.strDrinkThumb)}>REMOVE</button> */}
                      <button
                        className="fav-btn"
                        ref={toggleButton}
                        onClick={() => {
                          setItem({ id: item.idDrink, name: item.strDrink, image: item.strDrinkThumb });
                          toggle(item.idDrink)
                        }}
                      >{((JSON.stringify(favourites).includes(item.idDrink)) ? 'x' : '+')}{(loading ? 'L' : '!L')}</button>
                      <p>!!!{[item.idDrink]}</p>

                      <img className="cocktailImg" src={item.strDrinkThumb} alt="" />
                    </div>
                    <br />
                    <br />
                    <h4>Ingredients:</h4>
                    <p>{item.strIngredient1} {item.strMeasure1} </p>
                    <p>{item.strIngredient2} {item.strMeasure2} </p>
                    <p>{item.strIngredient3} {item.strMeasure3} </p>
                    <p>{item.strIngredient4} {item.strMeasure4} </p>
                    <p>{item.strIngredient5} {item.strMeasure5} </p>
                    <p>{item.strIngredient6} {item.strMeasure6} </p>
                    <p>{item.strIngredient7} {item.strMeasure7} </p>
                    <p>{item.strIngredient8} {item.strMeasure8} </p>
                    <p>{item.strIngredient9} {item.strMeasure9} </p>
                    <p>{item.strIngredient10} {item.strMeasure10} </p>
                    <p>{item.strIngredient11} {item.strMeasure11} </p>
                    <p>{item.strIngredient12} {item.strMeasure12} </p>

                    <br />
                    <h4>Glass: </h4> <span>{item.strGlass}</span>
                    <br />
                    <br />
                    <h4>Instructions:</h4>
                    <p>{item.strInstructions}</p>
                    <br /> <br /> <br />
                  </div>
                )) : ''}
              </div>
            </div>
          </div>
        )} />

        <Route path='/ingredient' component={Ingredient} />
        <Route path='/favourites' render={props => (

          <Favourites id={item} />
        )} />
        <footer><h6>Powered by TheCocktailDB API</h6></footer>
      </div>
    </Router>
  )

}

export default App