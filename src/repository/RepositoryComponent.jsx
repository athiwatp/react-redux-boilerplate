import React from 'react'
import PropTypes from 'prop-types'

export default function Repository({ name, link, star }) {
  return (
    <div>
      <div>{name}</div>
      <div>{link}</div>
      <div>{star}</div>
    </div>
  )
}

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired
}
