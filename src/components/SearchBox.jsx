/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SearchBox = ({ placeholder }) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      Recipes
    </a>
    <div className="input-group">
      <input
        type="search"
        className="form-control"
        placeholder={placeholder}
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  </nav>
);

export default SearchBox;
