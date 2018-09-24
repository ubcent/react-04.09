//компоненты React
import React, {PureComponent} from 'react';

import Comments from 'components/Comments';

//для проверки свойств компонента
import PropTypes from 'prop-types';

export default class CommentsContainer extends PureComponent{
    constructor(props){
        super(props);

        this.state = {
            comments: [],
        }
    }
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount(){
        const url = `http://127.0.0.1:3000/comments`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    comments: data,
                });
            });
    }

    render(){
        const { comments } = this.state; 
        return(
            <Comments comments={comments}/>
        );
    }
}