import React from 'react';

const Recipe = (props) => (
  <div className="card">
    <img
      src={props.meal.strMealThumb}
      className="card-img-top"
      alt={props.meal.strMeal}
    />
    <div className="card-body lightBg">
      <p className="card-text">
        {`Recipe Name: ${props.meal.strMeal}`} <a href="#">here</a>
      </p>
    </div>
  </div>
);

export default Recipe;