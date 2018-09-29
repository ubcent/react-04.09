import React, {PureComponent} from 'react';

import Room from 'components/Room';
import {Container} from 'reactstrap';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

//const USER_ID = 1; // Hardcoded user id of our hero

class RoomsContainer extends PureComponent {
  static propTypes = {
    authors: propTypes.array,
    messages: propTypes.array,
    dialogs: propTypes.array,
  }

  render() {
    let renderedRooms = '';
    if (this.props.authors.length !== 0) {
      renderedRooms = this.props.dialogs.map((dialog, index) => {
        /*if (+user.id !== USER_ID) {
          let messageCounter = 0;
          this.props.messages.forEach(message => {
            if (message.authorID === user.id) {
              messageCounter++;
            }
          })*/
          let messageCounter = 0;
          let author = {};
          this.props.messages.forEach(message => {
            if (+message.dialogId === +dialog.id) {
              messageCounter++;
              author = message.author;
            }
          });
          return <Room key={index} user={author} messageCounter={messageCounter} dialogId={+dialog.id}/>
        });
      }
    return (
      <Container>
        {renderedRooms}
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    messages: state.messages.entities,
    authors: state.users,
    dialogs: state.dialogs,
  }
}

export default connect(mapStateToProps)(RoomsContainer);
