import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { barangaysReducer, municipalitiesReducer } from './reducers/addressReducers'
import { farmerDetailsReducer, farmersListReducer } from './reducers/farmersReducers'

const reducer = combineReducers({
    municipalitiesList: municipalitiesReducer,
    barangaysList: barangaysReducer,
    farmersList: farmersListReducer,
    farmerDetails: farmerDetailsReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store