/********************************************************************
* Includes															*
*********************************************************************/
/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import rootReduser from './reducers';

/*Import user components*/
import HeaderContainer from 'containers/HeaderContainer';
import HomeContainer from 'containers/HomeContainer';
import BlogContainer from 'containers/BlogContainer';
import CommentContainer from 'containers/CommentContainer';
import UsersContainer from 'containers/UsersContainer';
import PostContainer from 'containers/PostContainer'
import Footer from 'components/Footer/';

const store = createStore(
    rootReduser,
    applyMiddleware(thunk),
);

/********************************************************************
* Main															*
*********************************************************************/
/**
  * @brief  Общая структура для всего блога.
  * Включает в себя header, content-part и footer
  * @param  None
  * @retval None
  */

class Layout extends Component{

    render(){
        return(
            <Fragment>
                <HeaderContainer/>
                <Switch>
                    <Route path="/" component={HomeContainer} exact/>
                    <Route path="/blog" component={BlogContainer} exact/>
                    <Route path="/blog/:id" component={PostContainer}/>
                    <Route path="/comments" component={CommentContainer} exact/>
                    <Route path="/users" component={UsersContainer} exact/>
                    <Route path="/login" component={UsersContainer} exact/>
                    <Route/>
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

/*Запуск отрисовки*/
ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('webPage'));


