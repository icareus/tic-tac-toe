import _ from 'lodash';
import R from 'ramda';

export const SET_VALUE = 'SET_VALUE';
export const GRID_RESET = 'GRID_RESET';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';

//---- INIT
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


//---- GAME 
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
    turn,
    value: newValue,
  })
};

//---- SCORE

export const calculateScore = (id, type) => {
  let score = getCheckType(id, type);
  console.log('score: ', score);
  return ({
    type: CALCULATE_SCORE,
    score,
  })
}

const getWinner = (value) => {
  let winner;
  if (value === 'o') {
    winner = 'Player 1';
  }
  else if (value === 'x') {
    winner = 'Player 2';
  }
  return ('Winner is ', winner);
}

const getCheckType = (id, type) => {
  if (type === 'horizontal') {
    checkHorizontal(id);
  }
  else if (type === 'vertical') {
    checkVertical(id);
  }
  else {
    checkDiagonal(id);
  }
};

let check = 0;

const checkHorizontal = (id) => (grid) => {
  console.log('ID', id);
  if (id > 9)
    return ;
  let next = id + 1;
  if (grid[id].value === grid[next].value) {
    check = check + 1;
    checkHorizontal(next);
  }
  else {
    check = 0;
    checkHorizontal(id + 3);
  }
  if (check === 3) {
    return getWinner(grid[next].value);
  }
  else
    return('Match nul!')
};

const checkVertical = (id) => (grid) => {
  if (id > 9)
    return ;
  let next = id + 3;
  if (grid[id].value === grid[next].value) {
    checkVertical(next);
  }
  else {
    checkVertical(id + 1);
  }
};

const checkDiagonal = (id) => {
  if (id === 0) {
    checkDiagonal1(id);
  }
  else if (id === 3) {
    checkDiagonal2(id);
  }
};

const checkDiagonal1 = (id) => (grid) => {
   if (id > 9)
    return ;
  let next = id + 4;
  if (grid[id].value === grid[next].value) {
    checkDiagonal1(next);
  }
  else {
    checkDiagonal2(2);
  }
};

const checkDiagonal2 = (id) => (grid) => {
   if (id > 9)
    return ;
  let next = id + 2;
  if (grid[id].value === grid[next].value) {
    checkDiagonal1(next);
  }
  else {
    //envoyer fonction match nul
  }
};










