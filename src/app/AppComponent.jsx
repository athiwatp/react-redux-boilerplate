import React from 'react'
import PropTypes from 'prop-types'
import Header from './HeaderComponent'

export default function App({ auth }) {
  return (
    <div>
      <Header auth={auth} />
      <h2>home</h2>
      <div>footer</div>
    </div>
  )
}

App.propTypes = {
  auth: PropTypes.object.isRequired
}
