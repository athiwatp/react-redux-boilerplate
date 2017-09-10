import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import App from '../app/AppComponent.jsx'
import DevTools from './DevTools'

export default function Root ({store}) {
  return (
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
