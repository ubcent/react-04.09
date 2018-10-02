import React, { Component } from 'react';

import Layout from 'components/Layout';

export default class LayoutContainer extends Component {
    constructor() {
        super();
        this.state = { 
            res: [],
            loading: false, 
        };
      }

    getApi = (url, method='GET', text) => {
        this.setState({ loading: true, });
        const BASE_URL = 'http://localhost:3001';
        fetch(`${BASE_URL}/${url}`, {
            method: method,
            body: JSON.stringify(text) || null,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => this.setState(
            { 
            res: json,
            loading: false, 
            })
        );   
    }
 
    render() {    
        const { res, loading } = this.state;

        return ( 
            loading && !res.length ? 'loading ...' : <Layout onGetApi={this.getApi} />               
        );
    }
}