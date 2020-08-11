import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import RecipeDetail from './components/RecipeDetail';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/:recipe_id" component={RecipeDetail} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
