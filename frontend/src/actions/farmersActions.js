import axios from 'axios'
import { FARMER_DETAILS_FAIL, FARMER_DETAILS_REQUEST, FARMER_DETAILS_SUCCESS, FETCH_ALL_FARMERS } from '../constants/farmersConstants'



const url = 'http://localhost:5000/farmers'

export const getFarmers = () => async(dispatch) => {
    try {
        const {data} = await axios.get(url)

        dispatch({type:FETCH_ALL_FARMERS, payload: data})

    } catch (error) {
        console.error(error)
    }
}

export const addFarmer = () => async(dispatch) => {
    
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

