import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { DarkModeProvider } from './Contexts'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();






