import { combineReducers } from 'redux';
import gridReducer from './grid';
import scoreReducer from './score';

const reducer = combineReducers({
  grid: gridReducer,
  score: scoreReducer,
});

export default reducer

