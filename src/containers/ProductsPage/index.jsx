import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProductList from '../ProductsList';
import FilterBar from '../../components/FilterBar';
import './index.css';
import useProductsAndCategories from '../../hooks/useProductsAndCategories';

const ProductsPage = (props) => {
  const { cartCount, setCartCount } = props;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, productList] = useProductsAndCategories();
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
