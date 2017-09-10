import {
  GITHUB_REPOSITORY_CLEAR,
  GITHUB_REPOSITORY_FAILURE,
  GITHUB_REPOSITORY_REQUEST,
  GITHUB_REPOSITORY_SUCCESS
} from './GitHubActionTypes'

export function repositoryRequest () {
  return {
    type: GITHUB_REPOSITORY_REQUEST
  }
}

export function repositorySuccess () {
  return {
    type: GITHUB_REPOSITORY_SUCCESS
  }
}

export function repositoryFailure () {
  return {
    type: GITHUB_REPOSITORY_FAILURE
  }
}

export function repositoryClear () {
  return {
    type: GITHUB_REPOSITORY_CLEAR
  }
}
