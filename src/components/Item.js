import React from "react";

function Item({ item, setItem, favourites }) {
  return (
    <button
      className="fav-btn"
      onClick={() => {
        setItem({
          idDrink: item.idDrink,
          strDrink: item.strDrink,
          strDrinkThumb: item.strDrinkThumb,
          strGlass: item.strGlass,
          strInstructions: item.strInstructions,
          strIngredient1: item.strIngredient1,
          strIngredient2: item.strIngredient2,
          strIngredient3: item.strIngredient3,
          strIngredient4: item.strIngredient4,
          strIngredient5: item.strIngredient5,
          strIngredient6: item.strIngredient6,
          strIngredient7: item.strIngredient7,
          strIngredient8: item.strIngredient8,
          strIngredient9: item.strIngredient9,
          strIngredient10: item.strIngredient10,
          strIngredient11: item.strIngredient11,
          strIngredient12: item.strIngredient12,
          strMeasure1: item.strMeasure1,
          strMeasure2: item.strMeasure2,
          strMeasure3: item.strMeasure3,
          strMeasure4: item.strMeasure4,
          strMeasure5: item.strMeasure5,
          strMeasure6: item.strMeasure6,
          strMeasure7: item.strMeasure7,
          strMeasure8: item.strMeasure8,
          strMeasure9: item.strMeasure9,
          strMeasure10: item.strMeasure10,
          strMeasure11: item.strMeasure11,
          strMeasure12: item.strMeasure12
        });
      }}
    >
      {JSON.stringify(favourites).includes(item.idDrink) ? "X" : "+"}
    </button>
  );
}

export default Item;
