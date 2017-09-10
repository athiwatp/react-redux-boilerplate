import React, { Component } from 'react'
import { Repository } from '../repository'

export default class GitHub extends Component {
  render () {
    return (
      <div>
        <div>GitHub</div>
        <Repository name="name1" link="link1" star={1} />
        <Repository name="name2" link="link2" star={2} />
        <Repository name="name3" link="link3" star={3} />
      </div>
    )
  }
}
