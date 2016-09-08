import { CALCULATE_SCORE } from '../actions';

const scoreReducer = (state = '', action) => {
  switch(action.type) {
  case CALCULATE_SCORE:
    return action.score
  default:
    return state;
  }
};

export default scoreReducer;
