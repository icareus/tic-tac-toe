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
export const setValue = (id, value) => ({
  type: SET_VALUE,
  value,
});

export const changeValue = (id, value) => {
  console.log('changeValue', value, id);
  let newValue;
  if (value !== 'v') {
    newValue === value;
  }
  else {
    newValue === 'x';
  }
  return (dispatch) => {
    dispatch(setValue(id, newValue))
  };
};
