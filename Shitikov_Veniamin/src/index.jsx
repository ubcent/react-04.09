import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';

class App extends Component {
    render(){
        return <div>
            <Header />
            Hello world
        </div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);