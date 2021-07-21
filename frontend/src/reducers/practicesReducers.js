import { PRACTICES_ADD_FAIL, PRACTICES_ADD_REQUEST, PRACTICES_ADD_SUCCESS, PRACTICES_LIST_FAIL, PRACTICES_LIST_REQUEST, PRACTICES_LIST_SUCCESS } from "../constants/practicesConstants"

export const practicesListReducer = (state = {practices: []}, action) => {
    switch(action.type) {
        case PRACTICES_LIST_REQUEST:
            return {loading: true, practices: []}
        case PRACTICES_LIST_SUCCESS:
            return {loading: false, practices: action.payload}
        case PRACTICES_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addPracticeReducer = (state = {}, action) => {
    switch(action.type) {
        case PRACTICES_ADD_REQUEST:
            return {loading: true}
        case PRACTICES_ADD_SUCCESS:
            return {loading: false, practice: action.payload}
        case PRACTICES_ADD_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
