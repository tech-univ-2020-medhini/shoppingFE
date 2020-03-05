import React from 'react';
import { render } from '@testing-library/react';
import ProductsPage from './index';


describe('the products page container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProductsPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
