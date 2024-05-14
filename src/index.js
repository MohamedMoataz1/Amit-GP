import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/Product.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {cartproducts}  from './Component/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={cartproducts}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);
reportWebVitals();
