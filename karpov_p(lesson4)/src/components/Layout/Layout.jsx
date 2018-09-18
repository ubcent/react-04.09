import 'normalize.css';
import './Layout.css';

import React, {Component, Fragment} from 'react';

import classNames from 'classnames';

import CommentArea from 'components/CommentArea';
import CommentForm from 'components/CommentForm';


class Layout extends Component {
    render() {
        const wrapperStyles = classNames('wrapper');
        const headingStyles = classNames('main-heading');
        return(
            <Fragment>
                <h1 className={headingStyles}>Welcome to chat!</h1>
                <div className={wrapperStyles}>
                    <CommentArea>
                    </CommentArea>
                    <CommentForm />                    
                </div>
            </Fragment>
        )
    }
}

export default Layout;