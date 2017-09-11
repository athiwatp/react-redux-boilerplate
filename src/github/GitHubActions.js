import {
  GITHUB_REPOSITORIES,
  GITHUB_REPOSITORIES_CLEAR
} from './GitHubActionTypes'

export function loadRepositories(username) {
  return {
    type: GITHUB_REPOSITORIES,
    payload: {
      client: 'default',
      request: {
        url: `/users/${username}/repos`
      }
    }
  }
}

export function clearRepositories() {
  return {
    type: GITHUB_REPOSITORIES_CLEAR
  }
}
