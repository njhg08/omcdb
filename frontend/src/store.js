import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import { barangaysReducer, municipalitiesReducer } from './reducers/addressReducers'
import { farmerDetailsReducer, farmersListReducer, updateFarmerDetailsReducer } from './reducers/farmersReducers'
import {addPestReducer, pestsListReducer} from './reducers/pestsReducers'
import { addDiseaseReducer, diseasesListReducer } from './reducers/diseasesReducers'
import { addPracticeReducer, practicesListReducer } from './reducers/practicesReducers'
import {addFarmDetailsReducer, farmDetailsReducer, farmDiseasesReducer, farmerFarmsReducer, farmPestsReducer, farmPracticesReducer, farmsListReducer, testReducer, updateFarmDetailsReducer, updateFarmDiseasesReducer, updateFarmPestsReducer, updateFarmPracticesReducer} from './reducers/farmsReducers'

const reducer = combineReducers({
    municipalitiesList: municipalitiesReducer,
    barangaysList: barangaysReducer,
    farmersList: farmersListReducer,
    farmerDetails: farmerDetailsReducer,
    pestsList: pestsListReducer,
    addPest: addPestReducer,
    diseasesList: diseasesListReducer,
    addDisease: addDiseaseReducer,
    practicesList: practicesListReducer,
    addPractice: addPracticeReducer,
    updateFarmerDetails: updateFarmerDetailsReducer,
    farmsList: farmsListReducer,
    farmerFarms: farmerFarmsReducer,
    farmDetails: farmDetailsReducer,
    farmPests: farmPestsReducer,
    farmDiseases: farmDiseasesReducer,
    farmPractices: farmPracticesReducer,
    addFarmDetails: addFarmDetailsReducer,
    updateFarmPest: updateFarmPestsReducer,
    updateFarmDisease: updateFarmDiseasesReducer,
    updateFarmPractice: updateFarmPracticesReducer,
    updateFarmDetails: updateFarmDetailsReducer})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store