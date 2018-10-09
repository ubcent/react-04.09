import './Content.css';

import React, {Component} from 'react';
import {Button} from 'reactstrap';

//HW4
export default class Content extends Component {

    render(){
        const {articles} = this.props;

        return(
            <main className='content'>
                {articles.map((article) =>
                    <div key={article.title}>
                        <h2>{article.title}</h2>
                        <p className='name-article'>{article.date} by <a href='#'>{article.author}</a></p>
                        <p>{article.text}</p>
                    </div>
                )}
                <Button outline color='primary' className='content-button'>Previous</Button>
                <Button outline color='primary' className='content-button'>Next</Button>
            </main>

        );
    }

}