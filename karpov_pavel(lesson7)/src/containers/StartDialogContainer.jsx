import React, { PureComponent, Fragment } from 'react';

import CommentArea from 'containers/CommentAreaContainer';
import CommentForm from 'containers/CommentFormContainer';

export default class StartDialogContainer extends PureComponent {
   constructor(props) {
        super(props);
        this.state = {
            comments: [],
            id: '',
        }
    } 

    componentDidMount() {
        const { match } = this.props;
        this.getApi(match.params.id);        
    } 

    componentDidUpdate(prevProps) {
        const {
          match: {
            params: { id }
          }
        } = this.props;
        const prevId = prevProps.match.params.id;
        if (prevId !== id) {
            this.getApi(id)
        }
      }

      getApi = (id) => {
        fetch(`http://localhost:3001/posts/${id}/comments`)
        .then(response => response.json())
        .then(json => 
            this.setState(
            { 
                comments: json,
                id,
            })
        )   
    }

    render() {   
        const { comments, id } = this.state;    
        return ( 
            <Fragment>
                <CommentArea comments={comments} />  
                <CommentForm id={id} onGetApi={this.getApi} />  
            </Fragment>    
        );
    }
}

