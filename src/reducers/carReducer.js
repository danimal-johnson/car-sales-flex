import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
    { id: 5, name: 'Fuzzy dice', price: 15}
  ]
};

// Used for adding or removing features
export const carReducer = (state=initialState, action) => {
  console.log("Action:", action.type);
  console.log("Payload:", action.payload);
  const stateCopy = {...state};

  switch (action.type) {
    case ADD_FEATURE: // Payload = item
      stateCopy.additionalPrice =
        stateCopy.additionalPrice + action.payload.price;
      console.log("Feat:", stateCopy.car.features);
      console.log("Pay:", action.payload);
      stateCopy.car.features.push(action.payload);
      return stateCopy;
    case REMOVE_FEATURE:
      console.log("Removing a feature");
      return state;
    default:
      console.log("No Match");
      return state;
  }
}

export default carReducer;