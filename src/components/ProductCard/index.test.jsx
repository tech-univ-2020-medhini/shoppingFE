import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './index';


describe('the product cards', () => {
  it('should render correctly when cardStyle is normal', () => {
    const { asFragment } = render(<ProductCard cardStyle="normal" />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly when cardStyle is sold-out', () => {
    const { asFragment } = render(<ProductCard cardStyle="sold-out" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
