export default (state = [], action) => {
  switch (action.type) {
    case 'FILTER_BY_INGREDIENT':
      return action.payload;
    default:
      return state;
  }
};
