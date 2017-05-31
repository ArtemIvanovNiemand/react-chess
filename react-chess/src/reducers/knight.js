import { createReducer } from 'redux-act';
import { moveKnight, changeField } from '../actions/KnightActions'

const initialState = { location: [0, 0], str_location: '0,0' };

export const knight = createReducer({
  [moveKnight]: (state, location) => {
    return {...state, location: location, str_location: location };
  },
  [changeField]: (state, location) => {
    return {...state, str_location: location };
  },
}, initialState);
