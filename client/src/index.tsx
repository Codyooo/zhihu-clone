import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './redux/store';
import history from './utils/history';




ReactDOM.render(
    <Provider store={store} >
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement);
