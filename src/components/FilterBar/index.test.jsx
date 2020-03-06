import React from 'react';
import { render } from '@testing-library/react';
import FilterBar from './index';


describe('the product cards', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<FilterBar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
