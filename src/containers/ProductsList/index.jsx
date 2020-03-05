import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';
import './index.css';

const ProductList = (props) => {
  const { filterCategory, productList } = props;
  let products;
  if (filterCategory === 'All') {
    productList.forEach((product) => {
      products.push(<ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        cart={product.cart}
        imageLink={product.imageLink}
        key={product.id}
      />);
    });
  } else if (filterCategory !== undefined) {
    products = productList.map((product) => (
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        cart={product.cart}
        imageLink={product.imageLink}
        key={product.id}
      />
    ));
  }


  return (
    <div className="Song-page">
      <p>
        {filterCategory}
      </p>
      <FilterBar />
      <div className="songs-container">
        {products}
      </div>
    </div>
  );
};
ProductList.propTypes = {
  filterCategory: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductList;
