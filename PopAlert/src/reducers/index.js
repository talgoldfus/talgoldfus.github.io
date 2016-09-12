import { combineReducers } from 'redux'
import alerts from './alertReducer.js'
import filter from './filterReducer.js'

const rootReducer = combineReducers({
  alerts,filter
})

export default rootReducer
