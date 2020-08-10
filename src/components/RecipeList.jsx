import React from 'react';
import { connect } from 'react-redux';
import { fetchAllRecipes } from '../actions';
// import UserHeader from './UserHeader';

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.fetchAllRecipes();
  }

  renderList() {
    if (this.props.recipes) {
      return this.props.recipes.map(meal => {
        return (
          <div key={meal.idMeal}>
            <h1>{`Recipe Name: ${meal.strMeal}`}</h1>
            <img src={meal.strMealThumb} alt="" />
            <h2>{`Category: ${meal.strCategory}`}</h2>
          </div>
        );
      });
    }
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  render() {
    return (
      <div className="ui relaxed divided list">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("this the state");
  console.log(state.recipes.meals);
  return { recipes: state.recipes.meals };
};

export default connect(mapStateToProps, { fetchAllRecipes })(RecipeList);