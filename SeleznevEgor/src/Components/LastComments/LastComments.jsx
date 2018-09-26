import './LastComments.scss';

import React, { PureComponent } from 'react';

import Comment from 'components/Comment/';

export default class LastComments extends PureComponent {
  
  render() {
      const comments = new Array(10).fill(5);
    return (
      
      <div className="LastComments">
          {comments.map((item, index)=>{
              return <Comment comment={item}/>;
          })}
      </div>
    );
  }
}
