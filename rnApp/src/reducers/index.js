//import Redux from 'redux';
let Redux = require('redux');
import Thunk from 'redux-thunk';

import messages from './messages';

let reducers = Redux.combineReducers({
  messages
});

let store = Redux.createStore(reducers, Redux.applyMiddleware(Thunk));

export default store;

