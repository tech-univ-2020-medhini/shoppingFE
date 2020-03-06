import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard';
import './index.css';

const ProductList = (props) => {
  const {
    filterCategory, productList, cartCount, setCartCount,
  } = props;
  let products = [];
  const soldOutProducts = [];
  if (filterCategory === 'All' && productList !== undefined) {
    productList.forEach((product) => {
      if (product.cart !== product.quantity) {
        products.push(<ProductCard
          cardStyle="normal"
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
      } else {
        soldOutProducts.push(<ProductCard
          cardStyle="sold-out"
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
      }
    });
    products = [...products, ...soldOutProducts];
  } else if (filterCategory !== undefined && productList !== undefined) {
    const filteredProducts = productList.filter((product) => product.category === filterCategory);
    filteredProducts.forEach((product) => {
      if (product.quantity !== product.cart) {
        products.push(<ProductCard
          cardStyle="normal"
          id={product.id}
          name={product.name}
          price={product.price}
          cart={product.cart}
          imageLink={product.imageLink}
          quantity={product.quantity}
          key={product.id}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />);
      } else {
        soldOutProducts.push(<ProductCard
          cardStyle="sold-out"
          id={product.id}
          name={product.name}
          price={product.price}
          cart={product.cart}
          imageLink={product.imageLink}
          quantity={product.quantity}
          key={product.id}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />);
      }
    });
    products = [...products, ...soldOutProducts];
  }


  return (
    <div className="products-container">
      <p>
        {filterCategory}
      </p>
      <div className="products-list">
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
