import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import CartPage from './index';
import useFilteredProducts from '../../hooks/useFilteredProducts';


describe('the cart page container', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { asFragment } = render(<Router history={history}><CartPage /></Router>);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should make an api call when rendered', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    render(<Router history={history}><CartPage /></Router>);
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products');
  });
  xit('should make an api call when the checkout button is clicked', () => {
    const mockAxios = jest.spyOn(axios, 'patch');
    mockAxios.mockResolvedValue({ data: [] });
    // useFilteredProducts = jest.fn(() => [0, 0, 0, []]);
    const { getByTestId } = render(<Router history={history}><CartPage /></Router>);
    fireEvent.click(getByTestId('test-btn'));

    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/quantities', []);
  });
});
