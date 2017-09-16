import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Logout } from '../auth/AuthComponent'

export default function Header({ auth }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
      </ul>
      <Logout auth={auth} />
    </div>
  )
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
}
