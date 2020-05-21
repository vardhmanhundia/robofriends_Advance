import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { searchRobots } from './reducer';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.default();
