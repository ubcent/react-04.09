import './Users.css';

import React, {PureComponent} from 'react';
import {Container} from 'reactstrap';

import users from '../../data/users';

export default class BlogPosts extends PureComponent {
  //handleUserNameClick = (e) => {
    //let user = users[e.target.getAttribute('name')-1];
    //console.log(user);
  //}

  render() {
    const usersList = users.map((user, index) => 
      <div name={user.id} className="user-info" onClick={this.handleUserNameClick} key={index}>
        {user.firstName} {user.lastName}
      </div>
    );

    return (
      <main>
        <Container>
          {usersList}
        </Container>
      </main>
    );
  }
}
