import './UserPreview.scss';
import React, {PureComponent} from 'react';

export default class UserPreview extends PureComponent {
    render() {
        const {user} = this.props;
        console.log('start',this.props);
        return (
            <div className="UserPreview row">

                <a className={"col-6 offset-3"} href={"/users/" + user.login}>
                    {user.userpic ?
                        <img src={user.userpic} alt="user"/>:
                        <span className="user_without_avatar">{user.login[0]}</span>}
                    {user.login}
                </a>
            </div>
        );
    }
}
