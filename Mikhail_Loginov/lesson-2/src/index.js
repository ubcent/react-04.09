import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Credentials from './components/credentials/credentials';

ReactDOM.render(
<Credentials />, 
document.getElementById('root'));
registerServiceWorker();
