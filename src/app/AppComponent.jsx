import React, { Component } from 'react'
import GitHub from '../github/GitHubContainer.jsx'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>header</div>
        <GitHub/>
        <div>footer</div>
      </div>
    )
  }
}
