import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Router from '../routes'
import DevTools from '../DevTools'

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Router />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
