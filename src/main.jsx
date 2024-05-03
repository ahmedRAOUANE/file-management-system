import React from 'react';
import store from './store/index.js';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

// components
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
