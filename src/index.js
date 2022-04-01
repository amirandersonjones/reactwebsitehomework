import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderLayer from './ProviderLayer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';//importing our router component to add to our application
import { FirebaseAppProvider } from 'reactfire'; //check if tslib install still needed. if you get a spreadArray error in the terminal

//our firebase web app's configuration which comes from the firebase website under the settings, do not copy the initialize firebase section
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd2DK0lpnClOB6NTxU3r-2BpQaAvMdVdI",
  authDomain: "homework-foxes84-ecommerce.firebaseapp.com",
  projectId: "homework-foxes84-ecommerce",
  storageBucket: "homework-foxes84-ecommerce.appspot.com",
  messagingSenderId: "904316420654",
  appId: "1:904316420654:web:11387783ba8c16027c15bf",
  measurementId: "G-M78QZ22HVB"
};


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* App is a child of the BrowserRouter such that APP has access to BrowserRouter functionality*/}
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>  
      <ProviderLayer />
    </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
