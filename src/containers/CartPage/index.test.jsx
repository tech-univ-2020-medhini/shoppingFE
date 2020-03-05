import React from 'react';
import { render } from '@testing-library/react';
import CartPage from './index';


describe('the cart page container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CartPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
