import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import peopleReducer from './store/reducers/people';

const store = createStore(peopleReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
