import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'Redux';
import { changeLang } from 'Translator/tr';



const AppComponent = (
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)

async function Start() {
    await changeLang();
    ReactDOM.render(AppComponent, document.getElementById('root'));
}
Start()