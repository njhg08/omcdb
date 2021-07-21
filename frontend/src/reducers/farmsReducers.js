import { ADD_FARM_DETAILS_FAIL, ADD_FARM_DETAILS_REQUEST, ADD_FARM_DETAILS_SUCCESS, FARMER_FARMS_FAIL, FARMER_FARMS_REQUEST, FARMER_FARMS_SUCCESS, FARMS_LIST_FAIL, FARMS_LIST_REQUEST, FARMS_LIST_SUCCESS, FARM_DETAILS_FAIL, FARM_DETAILS_REQUEST, FARM_DETAILS_SUCCESS, FARM_DISEASES_FAIL, FARM_DISEASES_REQUEST, FARM_DISEASES_SUCCESS, FARM_PESTS_FAIL, FARM_PESTS_REQUEST, FARM_PESTS_SUCCESS, FARM_PRACTICES_FAIL, FARM_PRACTICES_REQUEST, FARM_PRACTICES_SUCCESS, TEST, UPDATE_FARM_DETAILS_FAIL, UPDATE_FARM_DETAILS_REQUEST, UPDATE_FARM_DETAILS_SUCCESS, UPDATE_FARM_DISEASE_FAIL, UPDATE_FARM_DISEASE_REQUEST, UPDATE_FARM_DISEASE_SUCCESS, UPDATE_FARM_PEST_FAIL, UPDATE_FARM_PEST_REQUEST, UPDATE_FARM_PEST_SUCCESS, UPDATE_FARM_PRACTICES_FAIL, UPDATE_FARM_PRACTICES_REQUEST, UPDATE_FARM_PRACTICES_SUCCESS } from "../constants/farmsConstants"


export const farmsListReducer = (state = {farms: []}, action) => {
    switch(action.type) {
        case FARMS_LIST_REQUEST:
            return {...state, loading: true}
        case FARMS_LIST_SUCCESS:
            return {loading: false, farms: action.payload}
        case FARMS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const farmerFarmsReducer = (state = {farms: []}, action) => {
    switch(action.type) {
        case FARMER_FARMS_REQUEST:
            return {...state, loading: true}
        case FARMER_FARMS_SUCCESS:
            return {loading: false, farms: action.payload}
        case FARMER_FARMS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const farmDetailsReducer = (state = { farm: {}}, action) => {
    switch(action.type) {
        case FARM_DETAILS_REQUEST:
            return {...state, loading: true}
        case FARM_DETAILS_SUCCESS:
            return {loading: false, farm: action.payload}
        case FARM_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addFarmDetailsReducer = (state = {farmDetails: {}}, action) => {
    switch(action.type) {
        case ADD_FARM_DETAILS_REQUEST:
            return {loading: true}
        case ADD_FARM_DETAILS_SUCCESS:
            return {loading: false, farmDetails: action.payload}
        case ADD_FARM_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const farmPestsReducer = (state = {pests: []}, action) => {
    switch(action.type) {
        case FARM_PESTS_REQUEST:
            return {loading: true}
        case FARM_PESTS_SUCCESS:
            return {loading: false, pests: action.payload}
        case FARM_PESTS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const farmDiseasesReducer = (state = {diseases: []}, action) => {
    switch(action.type) {
        case FARM_DISEASES_REQUEST:
            return {loading: true}
        case FARM_DISEASES_SUCCESS:
            return {loading: false, diseases: action.payload}
        case FARM_DISEASES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const farmPracticesReducer = (state = {practices: []}, action) => {
    switch(action.type) {
        case FARM_PRACTICES_REQUEST:
            return {loading: true  }
        case FARM_PRACTICES_SUCCESS:
            return {loading: false, practices: action.payload}
        case FARM_PRACTICES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const updateFarmPestsReducer = (state = {farmPest: {}}, action) => {
    switch(action.type) {
        case UPDATE_FARM_PEST_REQUEST:
            return {loading: true}
        case UPDATE_FARM_PEST_SUCCESS:
            return {loading: false, farmPest: action.payload}
        case UPDATE_FARM_PEST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const updateFarmDiseasesReducer = (state = {farmDisease: {}}, action) => {
    switch(action.type) {
        case UPDATE_FARM_DISEASE_REQUEST:
            return {loading: true}
        case UPDATE_FARM_DISEASE_SUCCESS:
            return {loading: false, farmDisease: action.payload}
        case UPDATE_FARM_DISEASE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const updateFarmPracticesReducer = (state = {farmPractice: {}}, action) => {
    switch(action.type) {
        case UPDATE_FARM_PRACTICES_REQUEST:
            return {loading: true}
        case UPDATE_FARM_PRACTICES_SUCCESS:
            return {loading: false, farmPractice: action.payload}
        case UPDATE_FARM_PRACTICES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const updateFarmDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_FARM_DETAILS_REQUEST:
            return {loading: true, }
        case UPDATE_FARM_DETAILS_SUCCESS:
            return {loading: false, farmDetails: action.payload}
        case UPDATE_FARM_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

