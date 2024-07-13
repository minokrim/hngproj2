import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './home/home';
import Bookmark from './Bookmark/bookmark';
import Onboarding from './mobileonboarding/onboarding';
import Body from './body/body';
import Cart from './component/cart';
import Tinbudetails from './tinbu/tinbudetails';
import Fullproduct from './tinbu/fullproduct';

const router = createBrowserRouter([
  {path : '/hngproj2', element: <Home/> },
  {path : '/bookmark', element: <Bookmark/> },
  {path : '/onboarding', element: <Onboarding/> },
  {path : '/body', element: <Body/> },
  { path: '/cart', element: <Cart /> },
  { path: '/product/:id', element: <Tinbudetails /> },
  { path: '/fullproduct', element: <Fullproduct /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
