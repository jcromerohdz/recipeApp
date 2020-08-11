import themealdbAPI from '../api/themealdbAPI';

const fetchAllRecipes = (ingredient = 'Sugar') => async dispatch => {
  console.log(ingredient);
  const response = await themealdbAPI.get(`/filter.php?i=${ingredient}`);

  dispatch({
    type: 'FETCH_ALL_RECIPES',
    payload: response.data,
  });
};

const filterByIngredient = (ingredient) => async dispatch => {
  const response = await themealdbAPI.get(`/filter.php?i=${ingredient}`);

  dispatch({
    type: 'FILTER_BY_INGREDIENT',
    payload: response.data,
  });
};

export {
  fetchAllRecipes,
  filterByIngredient,
};
