import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';
import './index.css';

const ProductList = (props) => {
  const {
    filterCategory, productList, cartCount, setCartCount,
  } = props;
  let products = [];
  if (filterCategory === 'All' && productList !== undefined) {
    productList.forEach((product) => {
      products.push(<ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        cart={product.cart}
        imageLink={product.imageLink}
        key={product.id}
        quantity={product.quantity}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />);
    });
  } else if (filterCategory !== undefined && productList !== undefined) {
    const filteredProducts = productList.filter((product) => product.category === filterCategory);
    products = filteredProducts.map((product) => (
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        cart={product.cart}
        imageLink={product.imageLink}
        quantity={product.quantity}
        key={product.id}
        cartCount={cartCount}
        setCartCount={setCartCount}
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
  cartCount: PropTypes.number.isRequired,
  setCartCount: PropTypes.func.isRequired,
};
export default ProductList;
