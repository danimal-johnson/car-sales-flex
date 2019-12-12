export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';


// -------- ACTION CREATORS ---------- //
const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}

const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }
}