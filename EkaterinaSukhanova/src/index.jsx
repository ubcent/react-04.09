import 'bootstrap/dist/css/bootstrap.min.css';

import React, { PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from 'components/Header';
import CommentsListContainer from 'containers/CommentsListContainer';
import Home from 'components/Home';
import UserListContainer from "containers/UserListContainer";
import ContentContainer from "containers/ContentContainer";

import routes from './routes';
import menu from './menu';

class App extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header size='big'>
                    {menu.map((item, idx) => <Link to={item.link} key={idx}>{item.text}</Link>)}
                </Header>
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>
            </Fragment>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);
