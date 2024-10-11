import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Cart from './sections/Cart.js'
import Contact from './sections/Contact.js'
import Pricing from './sections/Pricing.js'
import Login from './sections/Login.js'
import Beat from './sections/Beat.js'

// import './fonts/Geist/webfonts/Geist-ExtraBold.woff2';
// import './fonts/Geist/webfonts/Geist-Bold.woff2';
// import './fonts/Geist/webfonts/Geist-Medium.woff2';
// import './fonts/Geist/webfonts/Geist-Regular.woff2';
// import './fonts/Geist/ttf/Geist-ExtraBold.ttf';
// import './fonts/Geist/ttf/Geist-Bold.ttf';
// import './fonts/Geist/ttf/Geist-Medium.ttf';
// import './fonts/Geist/ttf/Geist-Regular.ttf';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cart", element: <Cart /> },
  { path: "/contact", element: <Contact /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/login", element: <Login /> },
   // Dynamic route for beat
   { path: "/beat/:uid", element: <Beat /> }, // :title is the dynamic parameter
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
