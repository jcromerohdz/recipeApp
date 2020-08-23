/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllRecipes } from '../actions';

class SearchBox extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }
  
  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const ingredient = this.state.input;

    this.props.fetchAllRecipes(ingredient);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">
          Recipes
        </a>
        <form onSubmit={this.onSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder={this.props.placeholder}
            onChange={this.handleInputChange}

          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </nav>
    );
  }
}


export default connect(null, { fetchAllRecipes })(SearchBox);
