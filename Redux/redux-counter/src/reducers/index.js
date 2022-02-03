import { combineReducers } from "redux";
import counter from "./counter";
import isLoggedin from "./isLoggedin";


const rootReducer = combineReducers({
    counter: counter,
    isLogged: isLoggedin
})

export default rootReducer