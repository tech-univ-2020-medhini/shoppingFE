import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table';
import TotalCard from '../../components/TotalCard';
import Button from '../../components/Button';
import './index.css';
import useFilteredProducts from '../../hooks/useFilteredProducts';

const CartPage = () => {
  const history = useHistory();
  const [filteredProducts, totalCost, cartCount, productsList] = useFilteredProducts();
  const onCheckout = async () => {
    const patchQuantities = async () => {
      await axios.patch('http://localhost:8080/quantities', productsList);
      history.push('/');
    };
    patchQuantities();
  };
  const onContinueShopping = () => {
    history.push('/');
  };
  return (
    <div className="cart-page">
      <div className="cart-text">
        Your Shopping Cart (
        {cartCount}
        {' '}
        items)
      </div>
      <div className="cart-page-display">
        <Table filteredProducts={filteredProducts} />
        <div className="card-and-button">
          <TotalCard total={totalCost} onClickHandler={onCheckout} />
          <Button buttonColor="grey" text="Continue Shopping" onClickHandler={onContinueShopping} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
