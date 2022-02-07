import { combineReducers } from "redux";
import timer from './timereducer';
import lapReducer from './lapsreducer';
const rootReducer= combineReducers({    
    time:timer,
    laps:lapReducer,
});

export default rootReducer;