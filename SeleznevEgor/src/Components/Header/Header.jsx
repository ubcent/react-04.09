/********************************************************************
 * incude libraries                                                  *
 ********************************************************************/
import  React, {Component} from 'react';


/* Main code*/
export default class Header extends Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col"> first</div>
                    <div className="col"> Second</div>
                    <div className="col"> Third</div>

                </div>
            </div>

        )
    }
}