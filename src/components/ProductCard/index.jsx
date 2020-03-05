import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Counter from '../Counter';


function ProductCard(props) {
  const {
    id, name, imageLink, price, cart, quantity, cartCount, setCartCount, cardStyle,
  } = props;
  return (
    <div className={cardStyle === 'normal' ? 'product-card' : 'product-card-sold-out'}>
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
      <Counter cart={cart} max={quantity} id={id} cartCount={cartCount} setCartCount={setCartCount} />
    </div>

  );
}
ProductCard.propTypes = {
  cardStyle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cart: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  cartCount: PropTypes.number.isRequired,
  setCartCount: PropTypes.func.isRequired,
};

export default ProductCard;
