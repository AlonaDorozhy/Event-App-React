import { combineReducers } from 'redux';
import testReducer from '../../featyres/testarea/testReducer';
import eventReduser from '../../featyres/event/eventReducer';
const rootReducer = combineReducers({
  test: testReducer,
  events: eventReduser,
})

export default rootReducer;