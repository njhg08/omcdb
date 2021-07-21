import { FARMER_ADD_FAIL, FARMER_ADD_REQUEST, FARMER_ADD_SUCCESS, FARMER_DETAILS_FAIL, FARMER_DETAILS_REQUEST, FARMER_DETAILS_SUCCESS, FARMER_LIST_FAIL, FARMER_LIST_REQUEST, FARMER_LIST_SUCCESS, FARMER_UPDATE_FAIL, FARMER_UPDATE_REQUEST, FARMER_UPDATE_SUCCESS} from "../constants/farmersConstants"

export const farmersListReducer = (state = {farmers: []}, action) => {
    switch(action.type) {
        case FARMER_LIST_REQUEST:
            return {...state, loading: true}
        case FARMER_LIST_SUCCESS:
            return {loading: false, farmers: action.payload}
        case FARMER_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addFarmerReducer = (state = {}, action) => {
    switch(action.type) {
        case FARMER_ADD_REQUEST:
            return {loading: true}
        case FARMER_ADD_SUCCESS:
            return {loading: false, farmer: action.payload}
        case FARMER_ADD_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const farmerDetailsReducer = (state = {farmer:{}}, action) => {
    switch(action.type) {
        case FARMER_DETAILS_REQUEST:
            return {...state, loading: true, }
        case FARMER_DETAILS_SUCCESS:
            return {loading: false, farmer: action.payload}
        case FARMER_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const updateFarmerDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case FARMER_UPDATE_REQUEST:
            return {loading: true, }
        case FARMER_UPDATE_SUCCESS:
            return {loading: false, farmerDetails: action.payload}
        case FARMER_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}




