import React from 'react';
import RecipeList from '../container/RecipeList';
import SearchBox from '../container/SearchBox';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBox placeholder="Search by: Chicken or Beef or White Fish or Sugar" />
        <div className="container-fluid">
          <RecipeList />
        </div>
      </div>
    );
  }
}

export default App;
