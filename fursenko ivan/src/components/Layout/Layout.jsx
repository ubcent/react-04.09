import './Layout.css';

import React, {
    Component,
    Fragment
} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import routes from '../../routes';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class Layout extends Component {
    render() {
        const layoutClasses = classNames('container');

        return <div className = {layoutClasses} >
                <Header />
                <div className="nav">
                    <nav>
                         <ul>
                             <li>
                                 <NavLink activeClassName='is-active' exact={true} to="/">Home</NavLink>
                             </li>
                             <li>
                                 <NavLink activeClassName='is-active' to="/blog">Blog</NavLink>
                             </li>
                             <li>
                                 <NavLink activeClassName='is-active' to="/users">All Users</NavLink>
                             </li>
                         </ul>
                    </nav>
                </div>
                <div className = "wrapper" >
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>
                </div> 
                <Footer />
            </div>
    }
}
