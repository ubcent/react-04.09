import './Header.scss';

import React, {Component, Fragment} from 'react';
import HorizontalMenu from "components/HorizontalMenu";
import BlogButton from "components/BlogButton/BlogButton";

// Список пунктов меню
const menu = [
  {
    id: 'main',
    name: 'Home'
  },
  {
    id: 'new_feature,',
    name: 'New features'
  },
  {
    id: 'press',
    name: 'Press'
  },
  {
    id: 'new_hires',
    name: 'New hires'
  },
  {
    id: 'about',
    name: 'About'
  }
];

/**
 * Класс компонент Header
 */
export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-10">
            {/* Меню навигации */}
            <HorizontalMenu menu={menu}>
            </HorizontalMenu>
          </div>
          <div className="col-2">
            <BlogButton item={{id: "login", name: "Log in"}}>
            </BlogButton>
          </div>
        </div>
      </Fragment>
    );
  }
}