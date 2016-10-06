import {combineReducers} from 'redux'
import dailyReducer from './dailyReducer.js'
import globalReducer from './globalReducer.js'

export default combineReducers({
    daily: dailyReducer,
    item_type: globalReducer
})