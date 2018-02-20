import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
// import { Router, IndexRoute, hashHistory, Link } from 'react-router'
// import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import css from './app.sass'
import store from './store/store.js'
import App from './containers/Main/main.jsx'


render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
