import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ProductList from '../ProductsList';
import FilterBar from '../../components/FilterBar';
import './index.css';

const ProductsPage = (props) => {
  const { productList } = props;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get('http://localhost:8080/categories');
      setCategories(response.data);
    };
    getCategories();
  }, []);
  return (
    <div className="products-page">
      <div>Filter categories</div>
      <FilterBar categoryList={categories} onCLickFilter={setSelectedCategory} />
      <ProductList filterCategory={selectedCategory} productList={productList} />
    </div>
  );
};
ProductsPage.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsPage;
