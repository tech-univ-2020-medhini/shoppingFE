import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import useFilteredProducts from './useFilteredProducts';

describe('the useFilteredProducts hook', () => {
  it('should make an api call to fetch products from server', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const { result, waitForNextUpdate } = renderHook(() => useFilteredProducts());
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products');
    expect(result.current[0]).toEqual({});
  });
  it('should calculate the total cost from the products', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFilteredProducts());
    await waitForNextUpdate();
    expect(result.current[1]).toEqual(0);
  });
  it('should calculate the total cart count from the products', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFilteredProducts());
    await waitForNextUpdate();
    expect(result.current[2]).toEqual(0);
  });
  it('should return the product list from the response', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useFilteredProducts());
    await waitForNextUpdate();
    expect(result.current[3]).toEqual([]);
  });
});
