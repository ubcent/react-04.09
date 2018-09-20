import data from 'data/posts.json';

import React, { Component } from "react";

import Posts from 'components/Posts';

export default class MainPage extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Posts articles={data.articles}/>
                </div>
            </div>
        );
    }
}