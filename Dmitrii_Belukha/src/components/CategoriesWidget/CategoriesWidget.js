import React, { Component } from 'react';

import Categories from '../Categories/Categories';

class CategoriesWidget extends Component {
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Categories</h5>
        <div className="card-body">
          <div className="row">
            <Categories categories={['Web Design', 'HTML', 'Freebies']} />
            <Categories categories={['Javascript', 'CSS', 'Tutorials']} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesWidget;
