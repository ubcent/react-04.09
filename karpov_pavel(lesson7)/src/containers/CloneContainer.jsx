import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import Comment from 'components/Comment';
import { mountEvents, sendMessage } from 'actions/messages';

class ChatContainer extends PureComponent {
    render() {

        return (
            <Fragment>
                <Comment comment={comment} />
                {loading && 'Loading ..'}
            </Fragment>     
        )
    }
};

function mapStateToProps(state, ownProps) {
    return {       
        ...ownProps,
        messages: state.messages.entities,
    }
    
};

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        //добавляем импортированные actions в компонент
        mountEvents: () => mountEvents(dispatch),
        sendMessage: sendMessage(dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);