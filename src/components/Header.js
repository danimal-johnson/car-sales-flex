import React from 'react';
import { connect } from 'react-redux';
const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.car.image} alt={props.car.car.name} />
      </figure>
      <h2>{props.car.car.name}</h2>
      <p>Base amount: ${props.car.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  }
}
export default connect (mapStateToProps)(Header);
