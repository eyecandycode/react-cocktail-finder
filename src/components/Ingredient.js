import React from "react";
import "../App.css";

class Ingredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spirit: "vodka" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    let spirit = this.state.input;
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit}`
    );
    const data = await res.json();

    this.setState({
      loading: false,
      data: data.drinks,
      input: ""
    });
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            List cocktails that contain:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='vodka'>Vodka</option>
              <option value='whisky'>Whisky</option>
              <option value='rum'>Rum</option>
              <option value='gin'>Gin</option>
            </select>
          </label>
          <input type='submit' value='Submit' />
        </form>

        <div className='cocktails'>
          <br /> <br />
          {this.state.data
            ? this.state.data.map((item, i) => (
                <div key={item.idDrink} className='cockBox'>
                  <br />
                  <h3>{item.strDrink}</h3>
                  <br />
                  <img
                    className='cocktailImg'
                    src={item.strDrinkThumb}
                    alt=''
                  />
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
                  <h4>Glass: </h4>
                  <span>{item.strGlass}</span>
                  <br />
                  <br />
                  <h4>Instructions:</h4>
                  <p>{item.strInstructions}</p>
                  <br />
                  <br />
                  <br />
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Ingredient;
