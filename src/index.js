import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import style from './style.css';


const store  = createStore(reducer);

const render = () => { // this function will be reused
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
};

render();