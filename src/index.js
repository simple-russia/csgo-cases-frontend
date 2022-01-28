import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>
, document.getElementById('root')); 
