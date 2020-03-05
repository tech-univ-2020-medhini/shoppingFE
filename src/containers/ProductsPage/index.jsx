import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';
import './index.css';

const ProductPage = (props) => {
  const { filterCategory, productList } = props;
  let products;
  if (filterCategory !== undefined) {
    products = productList.map((song) => (
      <ProductCard
        id={song.id}
        name={productList.name}
        price={song.artists}
        cart={productList.cart}
        imageLink={productList.imageLink}
        key={productList.id}
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
ProductPage.propTypes = {
  filterCategory: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductPage;
