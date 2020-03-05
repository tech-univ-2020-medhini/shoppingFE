import React from 'react';
import { render } from '@testing-library/react';
import ProductsList from './index';


describe('the products page container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProductsList />);

    expect(asFragment()).toMatchSnapshot();
  });
});
