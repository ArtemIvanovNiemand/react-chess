import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Board from './components/Board';

const store = configureStore();

render(
  <Provider store={store}>
    <div className='app'>
      <Board />
    </div>
  </Provider>,
  document.getElementById('root')
);
