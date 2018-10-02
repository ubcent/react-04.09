import './Chatbox.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Message from 'components/Message';
import { connect } from "react-redux";
import {mountEvents} from "../../actions/messages";

//Компонент сообщений чата.
//Принимает на вход массив сообщений
class Chatbox extends PureComponent{
    constructor(props){
        super(props);
    }

    static propTypes = {
        items: PropTypes.array,
    };

    static defaultProps = {
        items: [],
    };

    componentDidMount() {
        const { mountEvents } = this.props;
        mountEvents();
    }

    render(){
        const { items } = this.props;
        return <div className='chatbox'>
            <ul>
                {items.map( (item) => {
                    return <Message key={item.id} type={item.type} message={item.text} id={item.id}/>
                })}
            </ul>
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        items: state.messages.entities,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        mountEvents: () => mountEvents(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
