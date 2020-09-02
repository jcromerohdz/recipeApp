import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import filterByIngredientReducer from './filterByIngredientReducer';

export default combineReducers({
  recipes: recipesReducer,
  searchResult: filterByIngredientReducer,
});
