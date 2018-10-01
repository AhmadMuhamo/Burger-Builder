import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const location = window.location || {};
const app = (
    <BrowserRouter basename={location.pathname || '/portfolio/projects/burger-builder/'}>
        <App />
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
