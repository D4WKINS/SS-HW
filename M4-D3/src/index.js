import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')//We call this a “root” DOM node because everything inside it will be managed by React DOM.
        );                       //Everything inside ReactDOM.render will be rendered/displayed in the browser, in this case the component contents of App.js 
                                 //Will be displayed on the page.





