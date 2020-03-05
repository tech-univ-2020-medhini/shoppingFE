import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import ProductsPage from './containers/ProductsPage';
import CartPage from './containers/CartPage';

function App() {
  const [productList, setProductsList] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('http://localhost:8080/products');
      setProductsList(response.data);
    };
    getProducts();
  }, []);
  return (
    <div className="App">
      <div className="header">
        <button type="button">cart</button>
      </div>
      <Router>
        <Switch>
          <Route exact path="/cart">
            <CartPage cartCount={cartCount} />
          </Route>
          <Route path="/">
            <ProductsPage
              productList={productList}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
