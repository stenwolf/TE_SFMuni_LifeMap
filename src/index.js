import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import './index.css';
import App from './components/core/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './store/reducers'
import sagas from './store/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware)
))

sagas.map(saga => sagaMiddleware.run(saga))
const container = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , container);

registerServiceWorker();




