import './Companions.scss';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {connect} from 'react-redux';

import {getCompanions} from 'actions/messages';

class Companions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
    };
  }
  
  close = () => {
    this.setState({isClosed: true})
  };
  
  open = () => {
    this.setState({isClosed: false})
  };
  
  componentDidMount() {
    const {getCompanions} = this.props;
    getCompanions();
  };
  
  render() {
    const companionListModalClass = classNames(
      'companion-list-modal',
      {'companion-list-modal hidden': this.state.isClosed,}
    );
    const {companionList} = this.props;
    return (
      <div className="companion-menu">
        <button className="btn btn-default" role="button" onClick={this.open}>Собеседники</button>
        <div className={companionListModalClass}>
          <div onClick={this.close}>x</div>
          {
            companionList && companionList.length ?
              companionList.map((companion) => <Link to={'/companion/' + companion.id} onClick={this.close} key={companion.id}>{companion.name}</Link>) :
              <p>Сервер Off-line</p>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    companionList: state.messages.companionList,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getCompanions: getCompanions(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Companions);
