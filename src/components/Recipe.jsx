import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Recipe extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.meal.strMealThumb}
          className="card-img-top"
          alt={this.props.meal.strMeal}
        />
        <div className="card-body">
          <p className="card-text">
            {`Recipe Name: ${this.props.meal.strMeal}`}
            {' '}
            more
            <Link to={`/${this.props.meal.idMeal}`}>here </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Recipe;
