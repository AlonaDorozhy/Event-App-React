import { combineReducers } from 'redux';
import testReducer from '../../featyres/testarea/testReducer';
import eventReduser from '../../featyres/event/eventReducer';
import {reducer as FormReducer} from 'redux-form'

const rootReducer = combineReducers({
  test: testReducer,
  form: FormReducer,
  events: eventReduser,
})

export default rootReducer;