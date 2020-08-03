import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.$url = '127.0.0.1' //global variable

ReactDOM.render(<App/>, document.getElementById('root'));