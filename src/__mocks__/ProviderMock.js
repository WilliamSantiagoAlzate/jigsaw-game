import React from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initialState } from '../redux/initialState';
import reducers from '../redux/reducers';

export const store = createStore(reducers, initialState);

export const ProviderMock = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route>
          {children}
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);