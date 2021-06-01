import axios from 'axios'
import { DISEASES_ADD_FAIL, DISEASES_ADD_REQUEST, DISEASES_ADD_SUCCESS, DISEASES_LIST_FAIL, DISEASES_LIST_REQUEST, DISEASES_LIST_SUCCESS } from "../constants/diseasesConstants"


const url = 'http://localhost:5000/diseases'

export const getDiseases = () => async(dispatch) => {
    try {
        dispatch({type: DISEASES_LIST_REQUEST})
        const {data} = await axios.get(url)

        dispatch({type:DISEASES_LIST_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:DISEASES_LIST_FAIL, payload: error.response.data})
    }
}

export const addDisease = (disease, diseaseDescription) => async(dispatch) => {
    try {
        dispatch({type: DISEASES_ADD_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.post(url, {disease, diseaseDescription}, config)

        dispatch({type:DISEASES_ADD_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:DISEASES_ADD_FAIL, payload: error.response.data})
    }
}