import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components'

/*
* createGlobalStyle позволяет нам создавать глобальные стили
* */

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Global />
        <App />
    </>
);
