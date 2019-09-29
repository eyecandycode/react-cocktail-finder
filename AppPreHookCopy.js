import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Ingredient from './components/Ingredient';
import Favourites from './components/Favourites';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: null,
      input: '',
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true,
    })
    let cocktail = this.state.input;
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    const data = await res.json()

    this.setState({
      loading: false,
      data: data.drinks,
      input: '',
    })

    console.log(this.state)
  }

  getFromDB() {
    let drinks;
    // Check from localstorage

    if (localStorage.getItem('drinks') === null) {
      drinks = [];
    } else {
      drinks = JSON.parse(localStorage.getItem('drinks'));
    }
    return drinks;
  }





  checkDB = (itemID) => {
    const drinks = JSON.parse(localStorage.getItem('drinks'));

    console.log(drinks)

    if ((JSON.stringify(drinks).includes(itemID)))
      console.log("qwertyuiop")
  }
  //FAVOURITES

  remove = (itemID) => {
    const drinks = JSON.parse(localStorage.getItem('drinks'))

    if ((JSON.stringify(drinks).includes(itemID))) {

      drinks.forEach((drink, index) => {
        if (itemID === drink.id) {
          drinks.splice(index, 1);
        }
      });

      localStorage.setItem('drinks', JSON.stringify(drinks));
    }



  }

  add = (itemID, name, image) => {
    const drinks = this.getFromDB();
    this.setState({
      [itemID]: JSON.stringify(drinks).includes(itemID),
      //itemID: itemID
    });

    console.log(this.state[itemID])

    let drinkObj = {
      id: itemID,
      name: name,
      image: image,
    }
    if ((!JSON.stringify(drinks).includes(itemID)) && (!this.state[itemID])) {

      drinks.push(drinkObj);

      localStorage.setItem('drinks', JSON.stringify(drinks));
    }
  }

  toggle = (itemID, name, image) => {
    const drinks = JSON.parse(localStorage.getItem('drinks'))
    if ((!JSON.stringify(drinks).includes(itemID))) {
      this.setState({
        [itemID]: !this.state[itemID],
        //itemID: itemID,
      }, () => {
        this.add(itemID)
      })
    }
    console.log(this.state)

  }










  // Local storage & (+/-) button :: recipe modal :: refactor :: 

  render() {
    const { data } = this.state

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
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input
                    placeholder={'Enter...'}
                    value={this.state.input}
                    onChange={this.handleChange.bind(this)}
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
                        <button onClick={() => this.add(item.idDrink, item.strDrink, item.strDrinkThumb)}>ADD</button>
                        <button onClick={() => this.remove(item.idDrink, item.strDrink, item.strDrinkThumb)}>REMOVE</button>
                        <button className="fav-btn" onClick={() => this.toggle(item.idDrink, item.strDrink, item.strDrinkThumb)}>{(this.state[item.idDrink] ? 'x' : '+')}</button>
                        <p>!!!{this.state[item.idDrink]}</p>

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
                      <h4>Glass: </h4><span>{item.strGlass}</span>
                      <br />
                      <br />
                      <h4>Instructions:</h4>
                      <p>{item.strInstructions}</p>
                      <br /><br /><br />
                    </div>
                  )) : ''}
                </div>
              </div>
            </div>
          )} />



          <Route path='/ingredient' component={Ingredient} />
          <Route path='/favourites' render={props => (

            <Favourites id={this.state.itemID} name={this.state.localName} image={this.state.localImage} />
          )} />
          <footer><h6>Powered by TheCocktailDB API</h6></footer>
        </div>
      </Router>
    )
  }
}

export default App
