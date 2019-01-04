import { combineReducers } from 'redux';
import testReducer from '../../featyres/testarea/testReducer';

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer