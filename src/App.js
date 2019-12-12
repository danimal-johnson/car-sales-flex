import React , { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allReducers } from './reducers'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const car = useSelector(state => state);
  const dispatch = useDispatch();

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dispatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={car.additionalFeatures} />
        <Total car={car} additionalPrice={car.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
