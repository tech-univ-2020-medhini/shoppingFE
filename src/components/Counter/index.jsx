import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './index.css';


function Counter(props) {
  const {
    id, setCartCount, cartCount, max,
  } = props;
  const { cart } = props;
  const [cartValue, setCartValue] = useState(cart);
  const onClickCounter = (direc) => {
    console.log(max);
    if (direc === '+' && cartValue < max) {
      const patchCart = async () => {
        axios.patch(`http://localhost:8080/products/${id}/cart`, {
          value: cart + 1,
        });
        setCartValue(cartValue + 1);
        setCartCount(cartCount + 1);
      };
      patchCart();
    } else if (direc === '-' && cartValue > 0) {
      const patchCart = async () => {
        axios.patch(`http://localhost:8080/products/${id}/cart`, {
          value: cart - 1,
        });
        setCartValue(cartValue - 1);
        setCartCount(cartCount - 1);
      };
      patchCart();
    }
  };
  return (
    <div className="counter">
      <button className="counter-button" onClick={() => onClickCounter('-')} type="button">-</button>
      {cartValue}
      <button className="counter-button" onClick={() => onClickCounter('+')} type="button">+</button>
    </div>

  );
}
Counter.propTypes = {
  id: PropTypes.number.isRequired,
  cart: PropTypes.number.isRequired,
  cartCount: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  setCartCount: PropTypes.func.isRequired,
};

export default Counter;
