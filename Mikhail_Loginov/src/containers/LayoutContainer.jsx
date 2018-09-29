import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from 'components/Header';
import BlogPostsContainer from 'containers/BlogPostsContainer';
import Footer from 'components/Footer';
import WelcomeModal from 'components/WelcomeModal';
import PostPageContainer from 'containers/PostPageContainer';
import MainPage from 'components/MainPage';
import Comments from 'components/Comments';
import Users from 'components/Users';

export default class LayoutContainer extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <WelcomeModal/>
          <Header/>
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/blog' component={BlogPostsContainer}/>
            <Route exact path='/comments' component={Comments}/>
            <Route exact path='/users' component={Users}/>
            <Route
              path='/post/:id'
              render={(props) => <PostPageContainer id={props.match.params.id}/>}/>
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}
