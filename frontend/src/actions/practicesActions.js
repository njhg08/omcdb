import { PRACTICES_ADD_FAIL, PRACTICES_ADD_REQUEST, PRACTICES_ADD_SUCCESS, PRACTICES_LIST_FAIL, PRACTICES_LIST_REQUEST, PRACTICES_LIST_SUCCESS } from "../constants/practicesConstants"
import axios from 'axios'

const url = 'http://localhost:5000/practices'

export const getPractices = () => async(dispatch) => {
    try {
        dispatch({type: PRACTICES_LIST_REQUEST})
        const {data} = await axios.get(url)

        dispatch({type:PRACTICES_LIST_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:PRACTICES_LIST_FAIL, payload: error.response.data})
    }
}

export const addPractice = (practice, practiceDescription) => async(dispatch) => {
    try {
        dispatch({type: PRACTICES_ADD_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.post(url, {practice, practiceDescription}, config)

        dispatch({type:PRACTICES_ADD_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:PRACTICES_ADD_FAIL, payload: error.response.data})
    }
}