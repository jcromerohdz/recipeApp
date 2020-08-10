import React from 'react';
import { connect } from 'react-redux';
import RecipeList from './RecipeList';
import SearchBox from './SearchBox';
import { render } from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <SearchBox placeholder='Search by: Chicken or Beef or White Fish or Sugar or '/>
        <RecipeList />
      </div>
    );
  }
};

export default App;
