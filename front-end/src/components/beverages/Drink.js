import React from "react";
import "./Drink.css";

export default function Drink({ alcohol, index }) {
  const formatIngredients = (ingredients) => {
    const array = ingredients.split(", ");
    return array.map((ingredient) => {
      return <li>{ingredient}</li>;
    });
  };
  return (
    <div className="alcohol-grid-wrapper" key={index}>
      <div className="first-cell">
        <h1>{alcohol.name}</h1>
        <img src={alcohol.image} alt={alcohol.name} />
        <h3>Proof: {alcohol.proof}%</h3>
      </div>
      <div className="second-cell">
        <div className="second-wrap">
          <h2>Ingredients</h2>
          <ul>{formatIngredients(alcohol.ingredients)}</ul>
        </div>
      </div>
      <div className="third-cell">
        <h3>{alcohol.description}</h3>
      </div>
    </div>
  );
}
