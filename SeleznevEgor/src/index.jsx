/********************************************************************
* Includes															*
*********************************************************************/

/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

/*Import user components*/
import Header from 'components/Header/'

/********************************************************************
* Main															*
*********************************************************************/

class Layout extends Component{
    render(){
        return(
            <Fragment>
            <Header items={['All','Category 1','Category 2','Category 3']} />
            <div>Hello World!!</div>
            </Fragment>
        );
    }
}

ReactDom.render(<Layout/>, document.getElementById('Main-page'));


