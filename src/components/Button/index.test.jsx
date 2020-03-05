import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';


describe('the button', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
});
