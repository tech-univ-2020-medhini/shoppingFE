import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductsAndCategories = () => {
  const [categories, setCategories] = useState([]);
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
  return [categories, productList];
};
export default useProductsAndCategories;
