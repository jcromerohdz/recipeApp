import themealdbAPI from '../api/themealdbAPI';

const fetchAllRecipes = () => async dispatch => {
  const response = await themealdbAPI.get('/search.php?f=c&key=1');

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
