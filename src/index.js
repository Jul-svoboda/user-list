import React from "react";
import ReactDOMClient from "react-dom/client";
import App from './App'
import './css/style.css'

const parentObject = document.getElementById('app');

const root = ReactDOMClient.createRoot(parentObject);
root.render(<App />);