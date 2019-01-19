/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/

/*import libs*/
import  React, {PureComponent} from 'react';

import {connect} from 'react-redux';
import {getUsers} from '../actions/users';
import UserPreview from 'components/UserPreview';
import LoadMore from 'components/loadMore';

class UsersContainer extends PureComponent{
    componentDidMount() {
        const {STEP, getUsers} = this.props;
        getUsers(STEP);
    }

    loadMoreUsers = () =>{
        const {STEP, users, getUsers} = this.props;
        console.log('test', users.users.length, STEP);
        getUsers(users.users.length+STEP);
    };
    
    render(){
        const {users,} = this.props;
        console.log(users);
        return (
            <div className={"users-page container"}>
                <h1>Пользователи</h1>

                    {users.users.map((item)=> {
                        console.log(item);
                        return <UserPreview user={item}/>;
                    })}
                    {users.finish ? '':  <LoadMore loadMore={this.loadMoreUsers}/>}

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        users: state.users.users,
        STEP: state.users.STEP,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getUsers: (number) => dispatch(getUsers(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);