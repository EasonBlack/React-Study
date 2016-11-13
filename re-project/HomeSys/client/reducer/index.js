import {combineReducers} from 'redux'
import dailyReducer from './dailyReducer.js'
import globalReducer from './globalReducer.js'
import bookReducer from './bookReducer.js'
import staticReducer from './staticReducer.js'

export default combineReducers({
    daily: dailyReducer,
    item_type: globalReducer,
    book: bookReducer,
    static: staticReducer
})