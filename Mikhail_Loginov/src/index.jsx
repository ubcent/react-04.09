import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from 'components/Layout';
import PostPage from 'components/PostPage';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/post/:id"
                render={(props) => <PostPage id={props.match.params.id} />} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
