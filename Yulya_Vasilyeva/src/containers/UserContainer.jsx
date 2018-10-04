//импорт React
import React, { PureComponent} from 'react';
//для подключения контейнера к store
import { connect } from 'react-redux';

import Users from 'components/Users';
import { mountEvents } from 'actions/users';

//для проверки свойств компонента
//import PropTypes from 'prop-types';

class UserContainer extends PureComponent {
    componentDidMount(){
        //подклчаем функции
        const { mountEvents } = this.props;
        mountEvents();
    }
    render() {
        const { users } = this.props;
        return (
            <Users users={users} />
        );
    }
}
// в props попадает match, state - содержимое store
//отвечает за то, что находится в Store
function mapStateToProps(state, ownProps){
    //то, что вернем, попадет в props
    return{
        ...ownProps,
        users: state.users.userList,
    }
}
// для отправки компонетом действий (action)
//отвечает за то, что находится в Actions
function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        //методы, которые мы посылаем из action
        mountEvents: () => mountEvents(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);