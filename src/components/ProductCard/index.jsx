import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Counter from '../Counter';


function ProductCard(props) {
  const {
    name, imageLink, price, cart, onClickCounter,
  } = props;
  return (
    <div className="product-card">
      <img src={imageLink} alt={name} />
      <p>
        {name}
      </p>
      <p>
        MRP
        {' '}
        {price}
        {' '}
        /
      </p>
      <Counter cart={cart} onClickCounter={onClickCounter} />
    </div>

  );
}
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cart: PropTypes.number.isRequired,
  onClickCounter: PropTypes.func.isRequired,
};

export default ProductCard;
