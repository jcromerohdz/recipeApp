export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_RECIPES':
      return action.payload;
    default:
      return state;
  }
};
