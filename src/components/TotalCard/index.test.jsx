import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import TotalCard from './index';


describe('the total card', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<TotalCard />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should call onclick handler when checkout is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<TotalCard onClickHandler={onClickMock} />);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
