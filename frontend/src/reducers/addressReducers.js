import {
    FETCH_BARANGAYS,
    FETCH_MUNICIPALITIES
} from '../constants/addressConstants'

export const municipalitiesReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_MUNICIPALITIES:
            return action.payload
        default:
            return state
    }
}

export const barangaysReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_BARANGAYS:
            return action.payload
        default:
            return state
    }
}

