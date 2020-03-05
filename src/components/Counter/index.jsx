import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


function Counter(props) {
  const {
    cart, onClickCounter,
  } = props;
  return (
    <div className="counter">
      <button className="counter-button" onClick={() => onClickCounter('-')} type="button">-</button>
      {cart}
      <button className="counter-button" onClick={() => onClickCounter('+')} type="button">+</button>
    </div>

  );
}
Counter.propTypes = {
  cart: PropTypes.number.isRequired,
  onClickCounter: PropTypes.func.isRequired,
};

export default Counter;
