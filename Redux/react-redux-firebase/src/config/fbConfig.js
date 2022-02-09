import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApTW4y6fQ3_y9y4tYcnrDwjxLqTiC9NHg",
    authDomain: "react-redux-firebase-41978.firebaseapp.com",
    projectId: "react-redux-firebase-41978",
    storageBucket: "react-redux-firebase-41978.appspot.com",
    messagingSenderId: "958842195691",
    appId: "1:958842195691:web:6a0dd70ce1e0bd192e78ae",
    measurementId: "G-SNZVGYV4JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;