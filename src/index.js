import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import createStore from './store';
import reducers from './reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);