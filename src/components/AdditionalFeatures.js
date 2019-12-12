import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log("AddlFeat props:",props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.car.additionalFeatures.length ? (
        <ol type="1">
          {props.car.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);
