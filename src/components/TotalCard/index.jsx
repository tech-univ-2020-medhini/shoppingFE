import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Button from './components/Button';

function TotalCard(props) {
  const { total } = props;

  return (
    <div className="total-card">
      <div className="total">
        Total
      </div>
      <div className="rs">
        RS
      </div>
      <div className="price">
        {total}
      </div>
      <hr />
      <Button />

    </div>

  );
}
TotalCard.propTypes = {
  total: PropTypes.number.isRequired,
};

export default TotalCard;
