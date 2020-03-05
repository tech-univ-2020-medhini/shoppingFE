import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CartPage from './index';


describe('the cart page container', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { asFragment } = render(<Router history={history}><CartPage /></Router>);

    expect(asFragment()).toMatchSnapshot();
  });
});
