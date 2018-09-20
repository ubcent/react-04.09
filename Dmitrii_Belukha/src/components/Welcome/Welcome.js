import React, { Component } from 'react';
import classnames from 'classnames';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div
        className={classnames('modal', { 'd-block': isOpen })}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Добро пожаловать!</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.handleClick}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem explicabo quidem consectetur sequi quis laborum
                sit repudiandae iusto eius obcaecati, rerum sunt nemo voluptas,
                tempore architecto quod, aliquid nesciunt qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
