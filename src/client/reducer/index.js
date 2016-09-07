import { combineReducers } from 'redux';
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

const gridReducer = (state = gridCreated(), action) => {
  switch (action.type) {
  case GRID_RESET:
    return action.grid
  default:
    return state;
  }
};

const squareReducer = (state = {}, action) => {
  switch (action.type) {
  case SET_VALUE:
    return {
      ...state,
      ...state.square,
      [action.square.id]: {
        value: action.value,
      }
    };
  default:
    return state; 
  }
};

const reducer = combineReducers({
  grid: gridReducer,
  square: squareReducer,
});

export default reducer;
