import { DISEASES_ADD_FAIL, DISEASES_ADD_REQUEST, DISEASES_ADD_SUCCESS, DISEASES_LIST_FAIL, DISEASES_LIST_REQUEST, DISEASES_LIST_SUCCESS } from "../constants/diseasesConstants"


export const diseasesListReducer = (state = {diseases: []}, action) => {
    switch(action.type) {
        case DISEASES_LIST_REQUEST:
            return {loading: true, diseases: []}
        case DISEASES_LIST_SUCCESS:
            return {loading: false, diseases: action.payload}
        case DISEASES_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addDiseaseReducer = (state = {}, action) => {
    switch(action.type) {
        case DISEASES_ADD_REQUEST:
            return {loading: true}
        case DISEASES_ADD_SUCCESS:
            return {loading: false, disease: action.payload}
        case DISEASES_ADD_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}








