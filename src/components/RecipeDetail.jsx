import React, { Component } from 'react'
import themealAPI from '../api/themealdbAPI';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class RecipeDetail extends Component {
  
  state = {
    recipe: null
  }

  componentDidMount() {
    let id = this.props.match.params.recipe_id;
    themealAPI.get(`/lookup.php?i=${id}&key=1/$`).then(res => {
      this.setState({
        recipe: res.data.meals[0]
      })
      console.log(res.data.meals[0]);
    })
    
  }

  render() {
    const recipe = this.state.recipe ? (
      <div className="row justify-content-md-center pt-3">
      <div className="card col-md-6 col-sm-12 ">
        <img
          src={this.state.recipe.strMealThumb}
          className="card-img-top"
          alt={this.state.recipe.strMeal}
        />
        <div className="card-body lightBg">
          <h3>Ingredients: </h3>
          <ul>
            <li>{this.state.recipe.strIngredient1}</li>
            <li>{this.state.recipe.strIngredient2}</li>
            <li>{this.state.recipe.strIngredient3}</li>
            <li>{this.state.recipe.strIngredient4}</li>
            <li>{this.state.recipe.strIngredient5}</li>
          </ul>
          
            <p className="card-text">
              {`INSTRUCTIONS: ${this.state.recipe.strInstructions}`}
            </p>
            <Link to="/">Go Back</Link>
        </div>
    </div>
      </div>
    ) : (
      <div>Loading Recipe...</div>
    );
    return (
      <div ClassName="container-fluid">
        {recipe}
      </div>
    );
  }
}

export default RecipeDetail;
