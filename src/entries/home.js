import React from 'react';
import {render} from 'react-dom';
import data from '../api.json'
import Home from "../pages/containers/Home";
import {Provider} from 'react-redux'
import {createStore} from 'redux';

const initiaState = {
  data: {
      ...data
  }
};

const store = createStore(
    (state) => state,
    initiaState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

const homeContainer = document.getElementById('home-container');


render(
    <Provider store={store}/>
    , homeContainer);