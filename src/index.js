import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase/app';
import firebaseConfig from './config/firebase-config'

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

