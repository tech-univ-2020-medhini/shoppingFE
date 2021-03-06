import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {

  library,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

import ProductsPage from './containers/ProductsPage';
import CartPage from './containers/CartPage';

library.add(
  fab,
  faShoppingCart,
);


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/cart">
            <button type="button" className="cart-icon">
              <FontAwesomeIcon icon="shopping-cart" />
            </button>
          </Link>
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route path="/">
              <ProductsPage
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
