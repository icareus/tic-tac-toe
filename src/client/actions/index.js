import _ from 'lodash';
import R from 'ramda';

export const SET_VALUE = 'SET_VALUE';
export const GRID_RESET = 'GRID_RESET';

export const makeSquare = (squareId) => {
  return ({
    id: squareId,
    value: 'v',
  });
};

export const gridReset = () => {
  let grid = [];
  let newGrid;
  for (let i = 0; i !== 9; i = i + 1) {
    let square = makeSquare(i);
    newGrid = R.append(square, grid);
    grid = newGrid;
  }
  return ({
    type: GRID_RESET,
    grid,
  });
};


//---------------------------------------

let turn = 0;

export const setValue = (id, value) => {
  let newValue;
  if (value !== 'v') {
    newValue = value;
  }
  else {
    turn = turn + 1;
    if (turn % 2 === 0) {
      newValue = 'x';
    }
    else {
      newValue = 'o';
    }
  }
  return ({
    type: SET_VALUE,
    id,
    value: newValue,
  })
};
