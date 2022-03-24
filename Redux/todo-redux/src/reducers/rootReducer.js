import {combineReducers} from 'redux';
import { firebaseReducer} from 'react-redux-firebase';
import { firestoreReducer } from 'react-redux-firebase';

export const rootReducer=combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer
});