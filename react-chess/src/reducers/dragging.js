import { createReducer } from 'redux-act';
import { startDragging } from 'actions/DraggingActions';

const initialState = {
  from: undefined,
  color: undefined
};

const dragging = createReducer({
  [startDragging]: (state, payload) => {
    return {...state, from: payload.location, color: payload.color };
  },
}, initialState);

export default dragging;