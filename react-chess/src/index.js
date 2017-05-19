import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Board from './containers/Board';
import MoveField from './containers/MoveField';

const store = configureStore();

render(
  <Provider store={store}>
    <div className='app'>
      <Board />
			<MoveField />
    </div>
  </Provider>,
  document.getElementById('root')
);
