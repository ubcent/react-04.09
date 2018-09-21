/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './DecorativeLine.scss';

/*import libs*/
import React, {PureComponent} from 'react';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/
export default class DecorativeLine extends PureComponent {
   render() {
       const {onSend} = this.props;
       return (<div className="decorative-line"></div>);
   }
}