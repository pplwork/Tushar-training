const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const request = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const success = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const failure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(request());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.id);
                dispatch(success(users));
            })
            .catch(err => {
                dispatch(failure(err.message));
            })
    }
}

const Store = createStore(reducer, applyMiddleware(thunkMiddleware));
Store.subscribe(()=>console.log(Store.getState()));
Store.dispatch(fetchUsers());