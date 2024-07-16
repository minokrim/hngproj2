import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Bookmark from './Bookmark/bookmark';
import Onboarding from './mobileonboarding/onboarding';
import Body from './body/body';
import Cart from './component/cart';
import Tinbudetails from './tinbu/tinbudetails';
import Fullproduct from './tinbu/fullproduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/body" element={<Body />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Tinbudetails />} />
        <Route path="/fullproduct" element={<Fullproduct />} />
      </Routes>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
