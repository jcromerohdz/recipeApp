import React from 'react';

const Recipe = (props) => (
  <div>
    <h1>{`Recipe Name: ${props.meal.strMeal}`}</h1>
    <img src={props.meal.strMealThumb} alt="" />
    <h2>{`Category: ${props.meal.strCategory}`}</h2>
  </div>
);

export default Recipe;