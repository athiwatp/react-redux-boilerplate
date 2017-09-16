import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Router from '../routes'

export default function Root ({store}) {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
