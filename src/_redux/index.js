import { createStore } from 'redux';
import rootReducer from './reducer';

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => {
    const state_bal = store.getState().balance;
    const storage_bal = window.localStorage.getItem('balance');

    if (state_bal != storage_bal) {
        window.localStorage.setItem('balance', state_bal);
    }
})

export default store;