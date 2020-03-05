import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = (props) => {
  const { text, buttonColor, onClickHandler } = props;
  return (
    <button className={buttonColor === 'yellow' ? 'button-yellow' : 'button-white'} onClick={onClickHandler} type="button">{text}</button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  buttonColor: PropTypes.string.isRequired,
};
export default Button;