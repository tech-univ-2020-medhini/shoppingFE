import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table';
import TotalCard from '../../components/TotalCard';
import Button from '../../components/Button';
import './index.css';

const CartPage = () => {
  const history = useHistory();
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const getProductList = async () => {
      let total = 0;
      let cart = 0;
      const productResponse = await axios.get('http://localhost:8080/products');
      setProductsList(productResponse.data);
      productResponse.data.forEach((product) => {
        if (product.cart !== 0) {
          if (filteredProducts[product.category] === undefined) {
            filteredProducts[product.category] = [product];
            total += product.cart * product.price;
            cart += product.cart;
          } else {
            filteredProducts[product.category].push(product);
            total += product.cart * product.price;
            cart += product.cart;
          }
        }
      });
      setTotalCost(total);
      setCartCount(cart);
    };
    getProductList();
  }, []);
  const onCheckout = async () => {
    const patchQuantities = async () => {
      console.log(productsList);
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
      <div className="text">
        Your Shopping Cart (
        {cartCount}
        {' '}
        items)
      </div>
      <div className="cart-page-display">
        <Table filteredProducts={filteredProducts} />
        <TotalCard total={totalCost} onClickHandler={onCheckout} />
        <Button buttonColor="grey" text="Continue Shopping" onClickHandler={onContinueShopping} />
      </div>
    </div>
  );
};

export default CartPage;
