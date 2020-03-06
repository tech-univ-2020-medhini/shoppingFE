import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './index';


describe('the counter component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should increment its value when increment is pressed', () => {
    const { getByTestId } = render(<Counter />);

    fireEvent.click(getByTestId('test-increment'));
    expect(getByTestId('counter-div')).toHaveTextContent('-+');
  });
});
