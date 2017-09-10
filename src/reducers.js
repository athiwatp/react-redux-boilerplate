import { combineReducers } from 'redux'
import github from './github/GitHubReducer'

const rootReducer = combineReducers({
  github
})

export default rootReducer
