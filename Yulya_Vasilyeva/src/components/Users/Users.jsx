//импортитуем компоненты React
import React, { PureComponent, Fragment } from 'react';
import { Table } from 'reactstrap';

export default class Users extends PureComponent {

    render() {
        const { users } = this.props;
        return (
            <Fragment>
                <h1>Пользователи</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Имя</th>
                            <th>Ник</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, indx) => {
                            return (
                                <tr key={indx}>
                                    <th>{indx + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Fragment >
        );
    }
}