import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './index';


xdescribe('the product cards', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
  });
});
