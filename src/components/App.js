import React from 'react';
import { connect } from 'react-redux';
import RecipeList from './RecipeList';
import SearchBox from './SearchBox';
import { render } from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <div className="">
        <SearchBox placeholder='Search by: Chicken or Beef or White Fish or Sugar'/>
        <div className="container-fluid">
          <RecipeList />
        </div>
      </div>
    );
  }
};

export default App;
