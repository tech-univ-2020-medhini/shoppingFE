import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Counter from '../Counter';


function ProductCard(props) {
  const {
    name, imageLink, quantity, price,
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
      <Counter max={quantity} />
    </div>

  );
}
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCard;
