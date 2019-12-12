// Import all reducers here
import { combineReducers } from 'redux';
import carReducer from './carReducer';

export const allReducers = combineReducers({
  car: carReducer,
});

export default allReducers;