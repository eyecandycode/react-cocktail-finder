import React, { Component } from "react";
import "../App.css";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <div className='page'>
        <div className='field'>
          <h3>Search for a cocktail</h3>
          <br />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              placeholder={"Enter"}
              value={this.state.input}
              onChange={this.handleChange.bind(this)}
            />
            <input type='submit' value='Submit' />
          </form>
          <div className='cocktails'>
            <br /> <br />
            {data
              ? data.map((item, i) => (
                  <div key={item.idDrink} className='card'>
                    <br />
                    <h3>{item.strDrink}</h3>
                    <br />
                    <div>
                      <button
                        id={this.state.localID}
                        name={this.state.localName}
                        image={this.state.localImage}
                        onClick={() =>
                          this.toggleLocal(
                            item.idDrink,
                            item.strDrink,
                            item.strDrinkThumb
                          )
                        }
                        className='fav-btn'
                      >
                        +
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
      </div>
    );
  }
}

export default Search;
