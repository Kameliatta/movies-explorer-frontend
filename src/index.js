import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<BrowserRouter><App /></BrowserRouter>);
