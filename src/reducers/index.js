import {combineReducers} from 'redux';
import poemReducer from './poem-reducer';

//Combine reducers
var reducers = combineReducers({
    poemState: poemReducer
});

export default reducers;