/********************************************************************
* incude libraries                                                  *
********************************************************************/
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/********************************************************************
* import components                                                 *
********************************************************************/
import Header from 'components/Header/'
import './sass/main.scss';

class Layout extends Component{
    render(){
        return(
            <Fragment>
            <Header />
            <div>Hello World!!</div>
            </Fragment>
        );
    }
}

ReactDom.render(<Layout/>, document.getElementById('Main-page'));
