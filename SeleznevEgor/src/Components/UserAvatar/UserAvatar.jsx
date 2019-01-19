import './UserAvatar.scss';
import React, {PureComponent} from 'react';

export default class UserAvatar extends PureComponent {
    render() {
        const {userpic, login} = this.props;
        return (
            <div className="UserAvatar">
                {userpic ?
                    <img src={userpic} alt="user"/>:
                    <span className="user_without_avatar">{login[0]}</span>}
            </div>
        );
    }
}
