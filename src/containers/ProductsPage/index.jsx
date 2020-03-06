import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductList from '../ProductsList';
import FilterBar from '../../components/FilterBar';
import './index.css';

const ProductsPage = (props) => {
  const { cartCount, setCartCount } = props;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [productList, setProductsList] = useState([]);
  useEffect(() => {
    const getProductsAndCategories = async () => {
      const productResponse = await axios.get('http://localhost:8080/products');
      setProductsList(productResponse.data);
      const categoriesResponse = await axios.get('http://localhost:8080/categories');
      setCategories(categoriesResponse.data);
    };
    getProductsAndCategories();
  }, []);
  return (
    <div className="products-page">
      <div className="products-header">
        <div className="product-page-text">
          Filter categories
        </div>
        <FilterBar categoryList={categories} onCLickFilter={setSelectedCategory} />
      </div>
      <ProductList
        filterCategory={selectedCategory}
        productList={productList}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </div>
  );
};
ProductsPage.propTypes = {
  cartCount: PropTypes.number.isRequired,
  setCartCount: PropTypes.func.isRequired,
};

export default ProductsPage;
