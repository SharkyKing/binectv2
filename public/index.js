import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyABwhSvZDSK0TjAqIYViteBTbZ3YVRmd0M",
  authDomain: "binect-1c6e6.firebaseapp.com",
  projectId: "binect-1c6e6",
  storageBucket: "binect-1c6e6.appspot.com",
  messagingSenderId: "682395852200",
  appId: "1:682395852200:web:f39a6eb05de4779e97d19d",
  measurementId: "G-MSYP5NR61K"
};

const app =  firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
