import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { barangaysReducer, municipalitiesReducer } from './reducers/addressReducers'
import { farmerDetailsReducer, farmersListReducer } from './reducers/farmersReducers'
import {addPestReducer, pestsListReducer} from './reducers/pestsReducers'
import { addDiseaseReducer, diseasesListReducer } from './reducers/diseasesReducers'
import { practicesListReducer } from './reducers/practicesReducers'

const reducer = combineReducers({
    municipalitiesList: municipalitiesReducer,
    barangaysList: barangaysReducer,
    farmersList: farmersListReducer,
    farmerDetails: farmerDetailsReducer,
    pestsList: pestsListReducer,
    addPest: addPestReducer,
    diseasesList: diseasesListReducer,
    addDisease: addDiseaseReducer,
    practicesList: practicesListReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store