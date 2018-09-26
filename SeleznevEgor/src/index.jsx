/********************************************************************
* Includes															*
*********************************************************************/

/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

/*Import user components*/
import Main from 'components/Main/';
import Footer from 'components/Footer/';
import HeaderContainer from 'containers/HeaderContainer';
import HomeContainer from 'containers/HomeContainer';
import BlogContainer from 'containers/BlogContainer';
import CommentContainer from 'containers/CommentContainer';
import UsersContainer from 'containers/UsersContainer';

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
            user:{
                logined: false,
                username: '',
                userpic: '',
            },
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
                <HeaderContainer user={this.state.user} active={this.state.active} loginActive = {this.loginClick} menuChange={this.changeMenu}/>
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
    <BrowserRouter><Layout/></BrowserRouter>,
    document.getElementById('webPage'));


