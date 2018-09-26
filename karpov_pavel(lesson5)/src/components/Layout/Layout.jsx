import 'normalize.css';
import './Layout.css';

import React, {PureComponent, Fragment} from 'react';

import classNames from 'classnames';

import CommentArea from 'components/CommentArea';
import CommentForm from 'components/CommentForm';

// const messageText =  [
//     {
//         text:"hi",
//         type: "me"
//     },
//     {
//         text: "What's up man how R U",
//     },
//     {
//         text: "YO, MAN WAZUP",
//     },
//     {
//         text: "WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZUP!!!!!",
//     },
// ];

class Layout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }
    componentDidMount() {     
        return fetch('http://localhost:3000/comments')
        .then((response) => response.json())
        .then((comments) => {  
            comments.forEach((item, idx) => setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        messages: prevState.messages.concat([{text: item.body}]),
                    }                
                })
            }, 4000 * idx))             
        })   
    }

    updateData = (value) => {
        // this.setState({ addValue: this.state.messages.push(value) });  
        this.setState((prevState) => {
            return {
                ...prevState,
                messages: prevState.messages.concat([value]),
            }
        })        
    }    

    render() {
        const wrapperStyles = classNames('wrapper');
        const headingStyles = classNames('main-heading');
        const {messages} = this.state;

        return(
            <Fragment>
                <h1 className={headingStyles} >Welcome to chat!</h1>
                <div className={wrapperStyles}>
                    <CommentArea message={messages} />
                    <CommentForm updateData={this.updateData} />  
                </div>
            </Fragment>
        )
    }
}

export default Layout;