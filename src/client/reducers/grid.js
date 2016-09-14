import { GRID_RESET, SET_VALUE, makeSquare } from '../actions';
import R from 'ramda';

const GRIDSIZE = 3 * 3;

// const gridCreate = () => {
  // let grid = [];
  // let newGrid;
  // for (let i = 0; i !== 9; i = i + 1) {
  //   let square = makeSquare(i);
  //   newGrid = R.append(square, grid);
  //   grid = newGrid;
  // }
  // return grid
// };

// const getId = (id) => (square) => (square.id === id); 

const genGrid = () => R.times(R.always(' '), GRIDSIZE)

const gridReducer = (state = genGrid(), action) => {
  switch (action.type) {
    case GRID_RESET:
      return genGrid();
    case SET_VALUE: 
      // return R.flatten(R.insert(action.id, [{id: action.id, value: action.value, turn: action.turn }], R.reject(getId(action.id), state)))
      return (R.set(R.lensIndex(action.id), action.value, state))
    default:
      return state;
  }
};

export default gridReducer;
