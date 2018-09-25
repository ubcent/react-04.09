import React, {PureComponent} from 'react';

import Room from 'components/Room';
import app from '../index';
import {Container} from 'reactstrap';

const USER_ID = 1; // Hardcoded user id of our hero

export default class RoomsContainer extends PureComponent {
  state = {
    messages: [],
    authors: [],
  }

  componentDidMount() {
    app.get('messagesToYou').then(res => {
      res.json().then(res => {
        this.setState({messages: res});
      })
    });
    app.get('contacts').then(res => {
      res.json().then(res => {
        this.setState({authors: res});
      })
    })
  }

  render() {
    let renderedRooms = '';
    if (this.state.authors.length !== 0) {
      renderedRooms = this.state.authors.map((user, index) => {
        if (user.id !== USER_ID) {
          let messageCounter = 0;
          this.state.messages.forEach(message => {
            if (message.authorID === user.id) {
              messageCounter++;
            }
          })
          return <Room key={index} user={user} messageCounter={messageCounter}/>
        }
      });
    }
    return (
      <Container>
        {renderedRooms}
      </Container>
    )
  }
}
