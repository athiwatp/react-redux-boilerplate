/* global window */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store'
import Root from './root'

const store = configureStore({})
const rootElement = window.document.getElementById('root')

ReactDOM.render(
  <Router>
    <Root store={store} />
  </Router>,
  rootElement
)
