import React from 'react';
import { connect } from 'react-redux';
import { fetchAllRecipes } from '../actions';
import Recipe from './Recipe';


class RecipeList extends React.Component {
  componentDidMount() {
    this.props.fetchAllRecipes();
  }

  renderList() {
    if (this.props.recipes) {
      return this.props.recipes.map(meal => {
        return (
          <div className="col-md-4 col-sm-12 mt-2" key={meal.idMeal}>
            <Recipe meal={meal} />
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
      <div className="row mt-3">{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes.meals };
};

export default connect(mapStateToProps, { fetchAllRecipes })(RecipeList);