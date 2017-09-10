import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Repository from '../repository/RepositoryComponent.jsx'

export default class GitHub extends Component {

  constructor (props) {
    super(props)
    this.requestRepositories = this.requestRepositories.bind(this)
    this.clearRepositories = this.clearRepositories.bind(this)
  }

  requestRepositories () {
    console.log('requestRepositories')
  }

  clearRepositories () {
    console.log('clearRepositories')
  }

  render () {
    return (
      <div>
        <div>GitHub</div>
        <button onClick={this.requestRepositories}>REQUEST</button>
        <button onClick={this.clearRepositories}>CLEAR</button>
        {/*{repositories.map(repository =>*/}
          {/*<Repository*/}
            {/*key={index}*/}
            {/*name={repository.name}*/}
            {/*link={repository.link}*/}
            {/*star={repository.star}*/}
          {/*/>)}*/}
      </div>
    )
  }
}

GitHub.propTypes = {
  repositories: PropTypes.array.isRequired,
  onRequestRepositories: PropTypes.func.isRequired,
  onClearRepositories: PropTypes.func.isRequired
}

GitHub.defaultProps = {
  repositories: []
}
