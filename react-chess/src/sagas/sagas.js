/* eslint-disable */
import 'regenerator-runtime/runtime'

import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import { logout, setBoard, pieceWasMoved } from './actions';

function connect() {
  const socket = io('http://192.168.163.200:3000');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('MOVE_PICE', e => {
      emit(pieceWasMoved(e));
    });

    socket.on('PIECE_WAS_MOVED', e => {
      emit(pieceWasMoved(e));
    });

    socket.on('SET_BOARD', e => {
      emit(setBoard(e));
    });

    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const payload  = yield take('MOVE_PIECE');
    socket.emit('MOVE_PIECE', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  while (true) {
    const socket = yield call(connect);
    socket.emit('SET_BOARD');

    const task = yield fork(handleIO, socket);

    let action = yield take(`${logout}`);
    yield cancel(task);
    socket.emit('logout');
  }
}

export default function* rootSaga() {
  yield fork(flow);
}
/* eslint-disable */