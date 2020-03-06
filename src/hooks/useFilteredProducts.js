import axios from 'axios';
import { useState, useEffect } from 'react';

const useFilteredProducts = () => {
  const [productsList, setProductsList] = useState([]);
  // eslint-disable-next-line no-unused-vars
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
  return [filteredProducts, totalCost, cartCount, productsList];
};
export default useFilteredProducts;
