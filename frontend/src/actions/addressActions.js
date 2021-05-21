import axios from 'axios'
import { FETCH_BARANGAYS, FETCH_MUNICIPALITIES } from '../constants/addressConstants'


const url = 'http://localhost:5000'

export const getMunicipalities = () => async(dispatch) => {
    try {
        const {data} = await axios.get(`${url}/address/municipalities`)

        dispatch({type:FETCH_MUNICIPALITIES, payload: data})

    } catch (error) {
        console.error(error)
    }
}

export const getBarangays = (municipality_id) => async(dispatch) => {
    try {
        const {data} = await axios.get(`${url}/address/municipalities/${municipality_id}/barangays`)

        dispatch({type:FETCH_BARANGAYS, payload: data})

    } catch (error) {
        console.error(error)
    }
}