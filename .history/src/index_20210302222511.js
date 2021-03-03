import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-datetime/css/react-datetime.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Modal from "react-modal";
import { store, persistor } from "./components/redux/store";
import "./components/i18n/i18n";
import { changeLang } from "./components/redux/actions";



ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





Modal.setAppElement("#root");

const { langState } = JSON.parse(localStorage["persist:root"]);
const { locale, isRtl } = JSON.parse(langState);

if (langState) {
    store.dispatch(changeLang(locale, isRtl));
}

ReactDOM.render( <
    React.StrictMode >
    <
    Provider store = { store } >
    <
    PersistGate loading = { null }
    persistor = { persistor } >
    <
    App / >
    <
    /PersistGate> <
    /Provider> <
    /React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();