import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import CommentsForm from 'components/CommentsForm';

import routes from './routes';
import store from './store';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Kolya Sidorov'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  handleCommentRecieve = (comment) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        comments: prevState.comments.concat([comment]),
      }
    })
  }

  render() {
    const { comments } = this.state;
    return (
      <Fragment>
        <Header size="small" creators={creators}>
          <Link to="/">Home</Link>{' '}
          <Link to="/comments">Comments</Link>
        </Header>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </Fragment>
    );
  }
}

ReactDom.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root'),
);
