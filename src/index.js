import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree();


reportWebVitals();
