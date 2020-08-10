export default (state = '', action = {}) => {
  switch (action.type) {
    case 'FILTER_BY_INGREDIENT':
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
