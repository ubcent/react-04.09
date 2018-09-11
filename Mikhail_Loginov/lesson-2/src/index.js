import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Credentials from './components/credentials/credentials';

ReactDOM.render(
<Credentials />, 
document.getElementById('root'));
registerServiceWorker();
