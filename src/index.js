import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
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

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
