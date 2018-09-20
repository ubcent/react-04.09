import React, { Component } from 'react';

import SearchWidget from '../SearchWidget/SearchWidget';
import CategoriesWidget from '../CategoriesWidget/CategoriesWidget';
import SideWidget from '../SideWidget/SideWidget';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <SearchWidget />
        <CategoriesWidget />
        <SideWidget />
      </div>
    );
  }
}

export default Sidebar;
