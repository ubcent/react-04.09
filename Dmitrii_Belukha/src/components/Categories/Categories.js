import React from 'react';

export default props => {
  const { categories } = props;
  return (
    <div className="col-lg-6">
      <ul className="list-unstyled mb-0">
        {categories.map((ctg, index) => (
          <li key={index}>
            <a href="#">{ctg}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
