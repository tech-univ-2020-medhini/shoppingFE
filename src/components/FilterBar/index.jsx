import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


function FilterBar(props) {
  const { categoryList, onCLickFilter } = props;
  const categories = [<button type="button" className="category-button" onClick={() => onCLickFilter('All')}>All</button>];
  if (categoryList !== undefined) {
    categoryList.forEach((category) => {
      categories.push(<button type="button" className="category-button" onClick={() => onCLickFilter(category)}>{category}</button>);
    });
  }

  return (
    <div className="filter-bar">
      {categories}
    </div>

  );
}
FilterBar.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCLickFilter: PropTypes.func.isRequired,
};

export default FilterBar;
