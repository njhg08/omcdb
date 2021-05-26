import { FARMER_DETAILS_FAIL, FARMER_DETAILS_REQUEST, FARMER_DETAILS_SUCCESS, FETCH_ALL_FARMERS } from "../constants/farmersConstants"

export const farmersListReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_ALL_FARMERS:
            return action.payload
        default:
            return state
    }
}

export const addFarmerReducer = (state = {}, action) => {
    
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


