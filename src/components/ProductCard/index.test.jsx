import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductCard from './index';


describe('the product cards', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProductCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
