import * as c from '../actions';

// Used for adding or removing features
const appReducer = (state=[], action) => {
  switch (action.type) {
    case c.ADD_FEATURE:
    case c.REMOVE_FEATURE:
    default:
    
    return state;
  }
}

export default appReducer;
