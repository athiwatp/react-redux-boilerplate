import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import axios from './axiosMiddleware'

const enhancer = applyMiddleware(thunk, axios)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
