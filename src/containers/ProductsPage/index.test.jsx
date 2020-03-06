import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import ProductsPage from './index';


describe('the products page container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProductsPage />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should make an api call when rendered', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    render(<ProductsPage />);
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products');
  });
});
