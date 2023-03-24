import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import  ReactDOM  from "react-dom";
import App from './App';
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <Provider store = { store }>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();