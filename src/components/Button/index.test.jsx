import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';


describe('the button', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button onClickHandler={onClickMock} />);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
