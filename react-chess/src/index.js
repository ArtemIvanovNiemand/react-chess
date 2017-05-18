import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import { observe } from './containers/Game';

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('root')
  )
);