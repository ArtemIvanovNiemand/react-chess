import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, [0,0]);

ReactDOM.render(
	<Provider store={store}>
  	<Board/>
  </Provider>,
  document.getElementById('root')
);