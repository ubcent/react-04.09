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
    render(){
        return(
            <Fragment>
            <Header isMain={true}/>
            <Main/>
            <Footer />
            </Fragment>
        );
    }
}

/*Запуск отрисовки*/
ReactDom.render(<Layout/>, document.getElementById('webPage'));


