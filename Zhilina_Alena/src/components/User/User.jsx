import './User.css'

import React, { PureComponent} from 'react';

export default class User extends PureComponent{
    render(){
        return(
            <div className="user">
                <div className="user__img-block">
                    <img className="user__img" src="http://www.bce.lu/wp-content/uploads/2018/07/Picto_Traffic_User-100x100.png" alt=""/>
                </div>
                <div className="user__text-block">
                    <div className="user__info">
                        <span className="user__name"><a href="#">User Name</a></span>
                    </div>
                </div>
            </div>
        )
    }
}