import 'normalize.css';
import './Layout.css';

import React, {Component, Fragment} from 'react';

import classNames from 'classnames';

import CommentArea from 'components/CommentArea';
import CommentForm from 'components/CommentForm';

const messageText =  [
    {
        text:"hi",
        type: "me"
    },
    {
        text: "What's up man how R U",
    },
    {
        text: "YO, MAN WAZUP",
    },
    {
        text: "WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZUP!!!!!",
    },
];

class Layout extends Component {
    state = {
        messages: messageText,
    }

    updateData = (value) => {
        this.setState({ addValue: this.state.messages.push(value) })
      }

    render() {
        const wrapperStyles = classNames('wrapper');
        const headingStyles = classNames('main-heading');
        return(
            <Fragment>
                <h1 className={headingStyles}>Welcome to chat!</h1>
                <div className={wrapperStyles}>
                    <CommentArea message={this.state.messages} />
                    <CommentForm updateData={this.updateData} />  
                </div>
            </Fragment>
        )
    }
}

export default Layout;