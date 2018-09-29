import './Comment.css'

import React, { PureComponent} from 'react';

import { Link } from 'react-router-dom';

export default class Comment extends PureComponent{
    render(){
        const { comment } = this.props;
        console.log('2222222222222222222222222');
        return(
           <div className="comment">
               <div className="comment__img-block">
                   <img className="comment__img" src="http://www.bce.lu/wp-content/uploads/2018/07/Picto_Traffic_User-100x100.png" alt=""/>
               </div>
               <div className="comment__text-block">
                   <div className="comment__info">
                       <span className="comment__name">
                           <Link to={`/users/${comment.user.id}`}>{comment.user.firstName} {comment.user.lastName}</Link>
                       </span>
                       <span className="comment__date">APRIL 18, 2017</span>

                   </div>
                      <p className="comment__text">{comment.text}</p>
               </div>
           </div>
        )
    }
}