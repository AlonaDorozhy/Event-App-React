import { combineReducers } from 'redux';
import testReducer from './testReduser';

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer