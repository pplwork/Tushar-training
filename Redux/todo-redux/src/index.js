import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

//redux setup
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import { rootReducer } from './reducers/rootReducer';


//firebase setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMu_IQxNjdBK4z53goxIo4NSDt3vGz3mY",
  authDomain: "todo-react-redux-16f42.firebaseapp.com",
  projectId: "todo-react-redux-16f42",
  storageBucket: "todo-react-redux-16f42.appspot.com",
  messagingSenderId: "1033140773052",
  appId: "1:1033140773052:web:7c49bb1c91ffd798c070b9",
  measurementId: "G-EP6MGC6DN9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
//


const initalState = {};
const store = createStore(rootReducer, initalState);

//rrfConfig
const rrfConfig = {
  userProfile: "users",
  userFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}
//

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

