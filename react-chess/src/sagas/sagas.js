/* eslint-disable */
import 'regenerator-runtime/runtime'

import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import {
  login, logout, addUser, removeUser, newMessage, sendMessage, knightWasMoved
} from './actions';
import { MOVE_KNIGHT, KNIGHT_WAS_MOVED } from '../constants/ActionType'
import * as knightActions from '../actions/KnightActions'

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
    socket.on('users.login', ({ username }) => {
      emit(addUser({ username }));
    });
    socket.on('users.logout', ({ username }) => {
      emit(removeUser({ username }));
    });
    socket.on('messages.new', ({ message }) => {
      emit(newMessage({ message }));
    });
    socket.on('disconnect', e => {
      // TODO: handle
    });
    socket.on(MOVE_KNIGHT, e => {
    	console.log('SOMEONE MOVED KNIGHT')
    	console.log(e)
    	emit(knightWasMoved(e));
      // TODO: handle
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let {payload} = yield take(channel);
    payload.type = KNIGHT_WAS_MOVED;

    yield put(payload);
  }
}

function* write(socket) {
  while (true) {
    const payload  = yield take(MOVE_KNIGHT);
    console.log('--------------');
    console.log(payload);
    console.log('--------------');
    socket.emit(MOVE_KNIGHT, payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow() {
  while (true) {
    let user = 'user'
    const socket = yield call(connect);
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