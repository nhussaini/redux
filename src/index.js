import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterRedcuer from './store/reducer/counter';
import resultRedcuer from './store/reducer/result';

const rootReducer = combineReducers({
    ctr: counterRedcuer,
    res: resultRedcuer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store =>{
    return next =>{
        return action =>{
            console.log('[middleware] dispatching' ,action);
            const result = next(action);
            console.log('[middleware] next state', store.getState());
            return result;
        }
    }
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
