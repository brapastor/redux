import React from 'react';
import {render} from 'react-dom';
import data from '../api.json'
import Home from "../pages/containers/Home";
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from '../reducers/data'

const initiaState = {
  data: {
      ...data
  }
};

const store = createStore(
    reducer,
    initiaState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

const homeContainer = document.getElementById('home-container');


render(
    <Provider store={store}>
        <Home/>
    </Provider>
    , homeContainer);