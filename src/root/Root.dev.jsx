import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import App from '../app/AppComponent'
import DevTools from '../devtools'

export default function Root({ store }) {
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
