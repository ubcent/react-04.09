import './Message.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//Компонент сообщения.
//Принимает на вход тип сообщения( входящее, исходящее),
//и само сообщение
export default class Message extends PureComponent{
    constructor(props){
        super(props);
    }

    static propTypes = {
        type: PropTypes.oneOf(['in', 'out']),
        message: PropTypes.string.isRequired,
    };

    static defaultProps = {
        type: 'in',
        message: '',
        id: '',
    };

    render(){
        const { type, message, id } = this.props;
        const messageClass = classNames('message', {
            'in': type === 'in',
            'out': type === 'out',
        });
        return <li key={id} className={messageClass}>{message}</li>
    }
}