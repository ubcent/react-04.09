import './List.css'

import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';

import Comment from 'components/Comment';
import User from 'components/User';

export default class List extends PureComponent{
    static propTypes = {
        type: PropTypes.oneOf(['user', 'comment']),
        creators: PropTypes.arrayOf(PropTypes.string),
    };

    render(){
        const { type } = this.props;

        const typeChild = type === 'user'?<User/>:<Comment/>;
        return(
            <div className="list-wrap">
                <ul className="list">
                    <li className="list__item">
                        { typeChild }
                    </li>
                </ul>
            </div>
        )
    }
}