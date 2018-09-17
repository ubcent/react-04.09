import './Comment.css';

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// Компонент принимает 
  //image - аватар автора, 
  //author - автор, 
  //text - сам комментарий,
  //subComments - массив подкомментариев
export default class Comment extends Component{
    constructor(props){
        super(props);

    }

    static defaultProps = {
        image: '', 
        author: '', 
        text: '',
        subComments: [],
    }

    static propTypes = {
        image: PropTypes.string, 
        author: PropTypes.string, 
        text: PropTypes.string,
        subComments: PropTypes.array,
    }

    render(){
        const { image, author, text,subComments } = this.props;
        const sublist = subComments.map( (item, index) => {
            return <div key={index} className="media mt-4">
                <img className="d-flex mr-3 rounded-circle"
                        src={image} alt="" />
                    <div className="media-body">
                        <h5 className="mt-0">{author}</h5>
                        {text}
                </div>
            </div>
        });
        return <Fragment>
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle"
                     src={image} alt="" />
                <div className="media-body">
                    <h5 className="mt-0">{author}</h5>
                    {text}
                    // подкомментарии
                    {sublist}
                    
                </div>
            </div>
        </Fragment>
    }
}


