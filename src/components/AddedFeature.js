import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  console.log("AddedFeatProps:", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return {
    car2: state.car,
  }
}
export default connect(mapStateToProps, {removeFeature})(AddedFeature);
