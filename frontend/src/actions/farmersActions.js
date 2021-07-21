import axios from 'axios'
import { FARMER_ADD_FAIL, FARMER_ADD_REQUEST, FARMER_ADD_SUCCESS, FARMER_DETAILS_FAIL, FARMER_DETAILS_REQUEST, FARMER_DETAILS_SUCCESS, FARMER_LIST_FAIL, FARMER_LIST_REQUEST, FARMER_LIST_SUCCESS, FARMER_UPDATE_FAIL, FARMER_UPDATE_REQUEST, FARMER_UPDATE_SUCCESS} from '../constants/farmersConstants'




const url = 'http://localhost:5000/farmers'

export const getFarmers = () => async(dispatch) => {
    try {
        dispatch({type: FARMER_LIST_REQUEST})
        const {data} = await axios.get(url)

        dispatch({type:FARMER_LIST_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARMER_LIST_FAIL, payload: error.response.data})
    }
}

export const addFarmer = (farmer) => async(dispatch) => {
    try {
        
        dispatch({type: FARMER_ADD_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.post(url, farmer, config)

        dispatch({type:FARMER_ADD_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARMER_ADD_FAIL, payload: error.response.data})
    }
}

export const getFarmerDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: FARMER_DETAILS_REQUEST})

        const {data} = await axios.get(`${url}/${id}`)

        dispatch({type:FARMER_DETAILS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARMER_DETAILS_FAIL, payload: error.response.data})
    }
}

export const updateFarmerDetails = (farmer, farmerId) => async(dispatch) => {
    try {
        dispatch({type: FARMER_UPDATE_REQUEST})
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.put(`${url}/${farmerId}`, farmer, config)

        dispatch({type:FARMER_UPDATE_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARMER_UPDATE_FAIL, payload: error.response.data})
    }
}




