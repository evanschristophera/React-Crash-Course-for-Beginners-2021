import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// Contains the first code executed by the browser

// JSX html code in javascript.  Not understood by browsers
// <App/> html element is put in the root dom element
/// The "root" element is in the index.heml file
// https://youtu.be/Dorf8i6lCuk?t=2358
ReactDOM.render( <App />, document.getElementById('root'));

