import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import Root from './root'

const store = configureStore({})
const rootElement = document.getElementById('root')

ReactDOM.render(<Root store={store} />, rootElement)
