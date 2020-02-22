import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import redux from 'redux';

//create the store
const createStore = redux.createStore;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//creating an action
const BUY_CAKE = 'BUY_CAKE';

//action creator - a function that returns an action
function buyCake() {
    //return an action
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//Reducer
//(previousState, action) => newState
const initialState = { //the state of the application
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    //return new state of app based on current state and action
    switch(action.type){
        case BUY_CAKE: return {
            ...state, //Step 1
            numOfCakes: state.numOfCakes - 1
        }
        default: return state

        //do not mutate the state object, return a new object
        
        //state object may contain more than one property
        //Step 1 - create a copy of the state object - use spread operator
        //Step 2 - change only the necessary properties
    }
}

//Responsibilities of the Redux store
//1 - holds the applications state through the reducer
const store = createStore(reducer);

//2
console.log("Initial State: ", store.getState());

//3 - update the state
//action as parameter - invoke action creator to return action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

//4
const unsubscribe = store.subscribe(() => console.log("Updated State: ", store.getState()));
unsubscribe();