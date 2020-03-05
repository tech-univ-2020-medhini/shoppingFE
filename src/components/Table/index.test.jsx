import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from './index';


describe('the cart table', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Table />);

    expect(asFragment()).toMatchSnapshot();
  });
});
