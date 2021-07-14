//TODO:
// import { createStore } from 'redux';
// import reducers from './reducers';
// Create a default export of `createStore` that accepts an argument of `reducers`.
import { createStore } from 'redux';

// Importing the reducer file that is mostly unchanged
import reducers from './reducers';

export default createStore(reducers);