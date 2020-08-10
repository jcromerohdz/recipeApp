import themealdbAPI from '../api/themealdbAPI';

const fetchAllRecipes = () => async dispatch => {
  const response = await themealdbAPI.get('/search.php?f=c&key=1');

  dispatch({
    type: 'FETCH_ALL_RECIPES',
    payload: response.data,
  });
};

export {
  fetchAllRecipes,
};
