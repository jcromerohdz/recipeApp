export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_RECIPES':
      // console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
