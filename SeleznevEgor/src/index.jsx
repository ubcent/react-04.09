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
import Main from 'components/Main/';
import Footer from 'components/Footer/';
import HeaderContainer from 'containers/HeaderContainer';
import HomeContainer from 'containers/HomeContainer';
import BlogContainer from 'containers/BlogContainer';
import CommentContainer from 'containers/CommentContainer';
import UsersContainer from 'containers/UsersContainer';


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
    constructor(props){
        super(props);
        this.state = {
            active: 'home',
        }
    }

    loginClick = (username) =>{
        this.setState({
            user:{
                logined:true,
                username:username,
                userpic: 'content/avatar.png'
            }
        })
    };

    changeMenu = (newItem) =>{
        this.setState({
            active: newItem,
        })
    };

    render(){
        return(
            <Fragment>
                <HeaderContainer  active={this.state.active} menuChange={this.changeMenu}/>
                <Switch>
                    <Route path="/" component={HomeContainer} exact/>
                    <Route path="/blog" component={BlogContainer} exact/>
                    <Route path="/comments" component={CommentContainer} exact/>
                    <Route path="/users" component={UsersContainer} exact/>
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


