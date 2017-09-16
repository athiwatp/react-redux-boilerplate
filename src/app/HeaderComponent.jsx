import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../auth/AuthComponent'

export default function Header() {
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
      <Logout />
    </div>
  )
}
