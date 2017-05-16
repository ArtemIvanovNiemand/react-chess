import {createStore} from 'redux';


const reducer = (state = [0, 0], action) => {
  switch(action.type){
    case 'MOVE_KNIGHT':
    console.log("From redux");
    console.log(action.new_location);
    console.log("From redux");
      return action.new_location;
    default:
      return state;
  }
}

let knightPosition = [0, 0];
let observer = null;
const store = createStore(reducer);

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  console.log("HELP ME");

  store.dispatch({type: 'MOVE_KNIGHT', new_location: [toX, toY]})

  emitChange();
}

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}