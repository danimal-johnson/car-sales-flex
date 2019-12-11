// Import all reducers here
import { combineReducers } from 'redux';
import appReducer from './appReducer';

const allReducers = combineReducers({
  app: appReducer,
});

export default allReducers;