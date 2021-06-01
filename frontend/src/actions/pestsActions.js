import axios from 'axios'
import { PESTS_ADD_FAIL, PESTS_ADD_REQUEST, PESTS_ADD_SUCCESS, PESTS_LIST_FAIL, PESTS_LIST_REQUEST, PESTS_LIST_SUCCESS } from "../constants/pestsConstants"


const url = 'http://localhost:5000/pests'

export const getPests = () => async(dispatch) => {
    try {
        dispatch({type: PESTS_LIST_REQUEST})
        const {data} = await axios.get(url)

        dispatch({type:PESTS_LIST_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:PESTS_LIST_FAIL, payload: error.response.data})
    }
}

export const addPest = (pest, pestDescription) => async(dispatch) => {
    try {
        dispatch({type: PESTS_ADD_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.post(url, {pest, pestDescription}, config)

        dispatch({type:PESTS_ADD_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:PESTS_ADD_FAIL, payload: error.response.data})
    }
}



