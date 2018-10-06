import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {setDataReceivers} from 'actions/messages';

class ConnectionContainer extends PureComponent {
  
  componentDidMount() {
    const {setDataReceivers} = this.props;
    setDataReceivers();
  };
  
  render() {
    return null
  };
}

function mapStateToProps(state, props) {
  return {
    ...props,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    setDataReceivers: setDataReceivers(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionContainer);
