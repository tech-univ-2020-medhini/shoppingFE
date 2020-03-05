import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Table(props) {
  const { filteredProducts } = props;
  const productsJSX = [];
  if (filteredProducts !== undefined) {
    const categories = Object.keys(filteredProducts);
    categories.forEach((category) => {
      productsJSX.push(<tr><td colSpan={4}>{category}</td></tr>);
      const products = filteredProducts[category];
      products.forEach((product) => {
        productsJSX.push(
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.cart}</td>
            <td>{product.price * product.cart}</td>
          </tr>,
        );
      });
    });
  }

  return (
    <div className="table">
      <table>
        <tr>
          <th>
            Item
          </th>
          <th>
            Price
          </th>
          <th>
            Quantity
          </th>
          <th>
            Subtotal
          </th>
        </tr>
        {productsJSX}
      </table>
    </div>

  );
}
Table.propTypes = {
  filteredProducts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Table;
