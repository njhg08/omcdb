import { PESTS_ADD_FAIL, PESTS_ADD_REQUEST, PESTS_ADD_SUCCESS, PESTS_LIST_FAIL, PESTS_LIST_REQUEST, PESTS_LIST_SUCCESS } from "../constants/pestsConstants"


export const pestsListReducer = (state = {pests: []}, action) => {
    switch(action.type) {
        case PESTS_LIST_REQUEST:
            return {loading: true, pests: []}
        case PESTS_LIST_SUCCESS:
            return {loading: false, pests: action.payload}
        case PESTS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addPestReducer = (state = {}, action) => {
    switch(action.type) {
        case PESTS_ADD_REQUEST:
            return {loading: true}
        case PESTS_ADD_SUCCESS:
            return {loading: false, pest: action.payload}
        case PESTS_ADD_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}






