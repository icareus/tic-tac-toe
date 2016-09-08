import { GRID_RESET, SET_VALUE, makeSquare } from '../actions';
import R from 'ramda';

const gridCreated = () => {
  let grid = [];
  let newGrid;
  for (let i = 0; i !== 9; i = i + 1) {
    let square = makeSquare(i);
    newGrid = R.append(square, grid);
    grid = newGrid;
  }
  return grid;
};

const getId = (id) => (square) => (square.id === id); 


const gridReducer = (state = gridCreated(), action) => {
  switch (action.type) {
  case GRID_RESET:
    return action.grid
  case SET_VALUE: 
    return R.flatten(R.insert(action.id, [{id: action.id, value: action.value, turn: action.turn }], R.reject(getId(action.id), state)))
  default:
    return state;
  }
};

export default gridReducer;
