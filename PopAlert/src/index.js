import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router,browserHistory } from 'react-router'
import Routes from './routes'
import reducer from './reducers/index'
import alerts from './seed'

let store = createStore(reducer, alerts,
  window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
 document.getElementById('root')
);
