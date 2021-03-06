import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import {StateProvider,} from './providers/StateProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <StateProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </StateProvider>
  </AuthProvider>,
  document.getElementById('root')
);
