import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import useProductsAndCategories from './useProductsAndCategories';

describe('the useFilteredProducts hook', () => {
  it('should make an api call to fetch products from server', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const { waitForNextUpdate } = renderHook(() => useProductsAndCategories());
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products');
  });
  it('should return the products from the response', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useProductsAndCategories());
    await waitForNextUpdate();
    expect(result.current[0]).toEqual([]);
  });
  it('should return the categories from the response', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useProductsAndCategories());
    await waitForNextUpdate();
    expect(result.current[1]).toEqual([]);
  });
});
