import React from "react";
import "../App.css";
import Card from "./Card";

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
              <option value="vodka">Vodka</option>
              <option value="whisky">Whisky</option>
              <option value="rum">Rum</option>
              <option value="gin">Gin</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="cocktails">
          <br /> <br />
          {this.state.data
            ? this.state.data.map((item, i) => (
                <div key={item.idDrink} className="cockBox">
                  <br />
                  <h3>{item.strDrink}</h3>
                  <br />
                  <img
                    className="cocktailImg"
                    src={item.strDrinkThumb}
                    alt=""
                  />
                  <Card item={item} />
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Ingredient;
