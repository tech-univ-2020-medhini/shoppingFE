import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Table from '../../components/Table';
import TotalCard from '../../components/TotalCard';
import Button from '../../components/Button';
import './index.css';

const CartPage = (props) => {
  const history = useHistory();
  const { cartCount } = props;
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const filteredProducts = {};
  let totalCost = 0;
  useEffect(() => {
    const getProductList = async () => {
      const productResponse = await axios.get('http://localhost:8080/products');
      setProductList(productResponse.data);
      const categoriesResponse = await axios.get('http://localhost:8080/categories');
      setCategories(categoriesResponse.data);
      productList.forEach((product) => {
        if (product.cart !== 0) {
          filteredProducts[product.category].push(product);
          totalCost += product.cart * product.price;
        }
      });
    };
    getProductList();
  }, []);
  const onCheckout = async () => {
    const patchQuantities = async () => {
      const response = await axios.patch('http://localhost:8080/quantities', productList);
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
      <Table filteredProducts={filteredProducts} />
      <TotalCard price={totalCost} onClickHandler={onCheckout} />
      <Button buttonColor="grey" text="Continue Shopping" onClickHandler={onContinueShopping} />
    </div>
  );
};
CartPage.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default CartPage;
