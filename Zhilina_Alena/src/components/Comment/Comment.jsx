import './Comment.css'

import React, { PureComponent} from 'react';

export default class Comment extends PureComponent{
    render(){
        const { comment } = this.props;
        return(
           <div className="comment">
               <div className="comment__img-block">
                   <img className="comment__img" src="http://www.bce.lu/wp-content/uploads/2018/07/Picto_Traffic_User-100x100.png" alt=""/>
               </div>
               <div className="comment__text-block">
                   <div className="comment__info">
                       <span className="comment__name"><a href="#">{comment.user.firstName} {comment.user.lastName}</a></span>
                       <span className="comment__date">APRIL 18, 2017</span>
                       <span className="comment__post"><a href="#">{comment.post.title}</a></span>
                   </div>
                      <p className="comment__text">{comment.text}</p>
               </div>
           </div>
        )
    }
}