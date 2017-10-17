import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import allReducer from './reducers/root-reducer'

import { Provider } from 'react-redux';

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
