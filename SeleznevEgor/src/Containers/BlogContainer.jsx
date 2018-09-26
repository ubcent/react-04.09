/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/

/*import libs*/
import  React, {PureComponent} from 'react';
import  PropTypes from 'prop-types';

export default class BlogContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            category : 0,
        };
    }
    
    onClick(event){
        document.querySelector('.active').classList.remove('.active');
        console.log(event.target);
    }
    
    render(){
        const categories = ['All', 'Music', 'Photodiary'];
        return (
            <main>
                <nav className="categoties">
                    <ul className="nav nav-pills">
                        {categories.map((text, index) => {
                            return <li className={"nav-item"} id={index} key={index}><a className={"nav-link "+ (index === this.state.category ? 'active': '')} href="#" onClick = {this.onClick}>{text}</a></li>;
                        })}
                    </ul>
                </nav>
               
            </main>
        )
    }
}