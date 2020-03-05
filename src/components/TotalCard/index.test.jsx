import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TotalCard from './index';


describe('the total card', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<TotalCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
