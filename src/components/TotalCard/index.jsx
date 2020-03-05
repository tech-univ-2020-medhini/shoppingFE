import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Button from '../Button';

function TotalCard(props) {
  const { total, onClickHandler } = props;

  return (
    <div className="total-card">
      <div className="total-card-text">
        <div className="total">
          Total
        </div>
        <div className="rs">
          RS
        </div>
        <div className="price">
          {total}
        </div>
      </div>
      <hr />
      <div className="total-checkout">
        <Button buttonColor="yellow" text="Checkout" onClickHandler={onClickHandler} />
      </div>
    </div>

  );
}
TotalCard.propTypes = {
  total: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default TotalCard;
