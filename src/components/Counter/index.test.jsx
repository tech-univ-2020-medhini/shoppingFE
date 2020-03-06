import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Counter from './index';


describe('the counter component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
  });
  xit('should call the patch cart api when increment is pressed', () => {
    const { getByTestId } = render(<Counter
      id={1}
      cart={0}
      max={10}
      setCartValue={() => {}}
      setCartCount={() => {}}
    />);

    fireEvent.click(getByTestId('test-increment'));
    const mockAxios = jest.spyOn(axios, 'patch');
    mockAxios.mockResolvedValue({ data: {} });
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products/1/cart', {
      value: 1,
    });
  });
  xit('should call the patch cart api when decrement is pressed', () => {
    const { getByTestId } = render(<Counter
      id={1}
      cart={2}
      max={10}
      setCartValue={() => {}}
      setCartCount={() => {}}
    />);

    fireEvent.click(getByTestId('test-decrement'));
    const mockAxios = jest.spyOn(axios, 'patch');
    mockAxios.mockResolvedValue({ data: {} });
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products/1/cart', {
      value: 1,
    });
  });
});
