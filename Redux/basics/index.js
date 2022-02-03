const redux = require('redux');
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;
//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
    return {
        type: BUY_CAKE
    }
}

//action creator
function buyIcecream() {
    return {
        type: BUY_ICECREAM
    }
}

//Reducer---->(previousState,action)=>newState

const initialCakeState = {
    numofCakes: 10
}

const initialIcecreamState = {
    numofIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numofCakes: state.numofCakes - 1
        }
        default: return state;
    }
}

const iceCreamReducer=(state=initialIcecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return {
            ...state,
            numofIcecreams:state.numofIcecreams-1
        }
        default: return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const Store = createStore(rootReducer);
console.log('Initial State', Store.getState());
const unsubscribe = Store.subscribe(() => console.log('Updated State', Store.getState()));
Store.dispatch(buyCake());
Store.dispatch(buyCake());
Store.dispatch(buyCake());
Store.dispatch(buyCake());
Store.dispatch(buyIcecream());
Store.dispatch(buyIcecream());

unsubscribe();