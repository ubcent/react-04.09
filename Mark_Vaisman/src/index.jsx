import './css/bootstrap.css';
import './css/blog.css';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Menu from 'components/Menu';
import Header from 'components/Header';
import Blogs from "components/Blogs";
import Sidebar from "components/Sidebar";
import Footer from 'components/Footer';
import Alert from 'components/Alert';
import Data from 'components/Data';

const menuLinks = Data.getMenuLinks();
const blogs = Data.getBlogs();
const pagerLinks = Data.getPagerLinks();
const sideBarItems = Data.getSideBarItems();

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu links={menuLinks}/>
        <div className="container">
          <Header/>
          <div className="row">
            <Blogs blogs={blogs} pagerLinks={pagerLinks}/>
            <Sidebar items={sideBarItems}/>
          </div>
        </div>
        < Footer/>
        <Alert/>
      </Fragment>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
