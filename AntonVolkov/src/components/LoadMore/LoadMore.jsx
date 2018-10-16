import './LoadMore.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class LoadMore extends PureComponent {

  static propTypes = {
    currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onIncrement: PropTypes.func,
  };

  static defaultProps = {
    currentPage: 1,
    handlerClick: () => false,
  };

  handlerClick = () => { this.props.onIncrement(this.props.currentPage + 1); };
      
  render() {
    return (
      <div className="load-more">
        <button className="load-more__btn btn" onClick={ this.handlerClick } >Load More</button>
      </div>
    );
  }
}
    