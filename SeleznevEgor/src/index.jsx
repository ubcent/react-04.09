/********************************************************************
* Includes															*
*********************************************************************/

/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/*Import user components*/
import Header from 'components/Header/';
import Main from 'components/Main/';
import Footer from 'components/Footer/';

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
            <Header user={this.state.user} active={this.state.active} loginActive = {this.loginClick} menuChange={this.changeMenu}/>
            <Main/>
            <Footer />
            </Fragment>
        );
    }
}

/*Запуск отрисовки*/
ReactDom.render(<Layout/>, document.getElementById('webPage'));


