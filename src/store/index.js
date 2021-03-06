// You probably already import createStore from 'redux'
// You'll need to also import applyMiddleware
import { createStore, applyMiddleware } from 'redux';

// Import the `thunk` middleware
import thunk from 'redux-thunk';

// Import your existing root reducer here.
// Change this path to fit your setup!
import allReducers from '../reducers';

// The last argument to createStore is the "store enhancer".
// Here we use applyMiddleware to create that based on
// the thunk middleware.
const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

export default store;