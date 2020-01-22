import React from "react";

function Card({ item }) {
  return (
    <div style={{ margin: "1.4rem 0rem" }}>
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
    </div>
  );
}

export default Card;
