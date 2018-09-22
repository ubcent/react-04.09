import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Layout from 'components/Layout'

class App extends Component {
    
    render() {
        return(
           <Layout />
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app)