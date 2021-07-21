import axios from 'axios'
import { ADD_FARM_DETAILS_FAIL, ADD_FARM_DETAILS_REQUEST, ADD_FARM_DETAILS_SUCCESS, FARMER_FARMS_FAIL, FARMER_FARMS_REQUEST, FARMER_FARMS_SUCCESS, FARMS_LIST_FAIL, FARMS_LIST_REQUEST, FARMS_LIST_SUCCESS, FARM_DETAILS_FAIL, FARM_DETAILS_REQUEST, FARM_DETAILS_SUCCESS, FARM_DISEASES_FAIL, FARM_DISEASES_REQUEST, FARM_DISEASES_SUCCESS, FARM_PESTS_FAIL, FARM_PESTS_REQUEST, FARM_PESTS_SUCCESS, FARM_PRACTICES_FAIL, FARM_PRACTICES_REQUEST, FARM_PRACTICES_SUCCESS, UPDATE_FARM_DETAILS_FAIL, UPDATE_FARM_DETAILS_REQUEST, UPDATE_FARM_DETAILS_SUCCESS, UPDATE_FARM_DISEASE_FAIL, UPDATE_FARM_DISEASE_REQUEST, UPDATE_FARM_DISEASE_SUCCESS, UPDATE_FARM_PEST_FAIL, UPDATE_FARM_PEST_REQUEST, UPDATE_FARM_PEST_SUCCESS, UPDATE_FARM_PRACTICES_FAIL, UPDATE_FARM_PRACTICES_REQUEST, UPDATE_FARM_PRACTICES_SUCCESS} from '../constants/farmsConstants'

const url = 'http://localhost:5000/farms'

export const getFarms = () => async(dispatch) => {
    try {
        dispatch({type: FARMS_LIST_REQUEST})
        const {data} = await axios.get(url)

        dispatch({type:FARMS_LIST_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARMS_LIST_FAIL, payload: error.response.data})
    }
}

export const getFarmerFarms = (id) => async(dispatch) => {
    try {
        dispatch({type: FARMER_FARMS_REQUEST})
        const {data} = await axios.get(`${url}/farmer/${id}`)

        dispatch({type:FARMER_FARMS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARMER_FARMS_FAIL, payload: error.response.data})
    }
}

export const getFarmDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: FARM_DETAILS_REQUEST})
        const {data} = await axios.get(`${url}/${id}`)

        dispatch({type:FARM_DETAILS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARM_DETAILS_FAIL, payload: error.response.data})
    }
}

export const getFarmPests = (id) => async(dispatch) => {
    try {
        dispatch({type: FARM_PESTS_REQUEST})
        const {data} = await axios.get(`${url}/${id}/pests`)

        dispatch({type:FARM_PESTS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARM_PESTS_FAIL, payload: error.response.data})
    }
}

export const getFarmDiseases = (id) => async(dispatch) => {
    try {
        dispatch({type: FARM_DISEASES_REQUEST})
        const {data} = await axios.get(`${url}/${id}/diseases`)

        dispatch({type:FARM_DISEASES_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARM_DISEASES_FAIL, payload: error.response.data})
    }
}

export const getFarmPractices = (id) => async(dispatch) => {
    try {
        dispatch({type: FARM_PRACTICES_REQUEST})
        const {data} = await axios.get(`${url}/${id}/practices`)

        dispatch({type:FARM_PRACTICES_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:FARM_PRACTICES_FAIL, payload: error.response.data})
    }
}

export const addFarm = (farmDetails) => async(dispatch) => {
    try {
        dispatch({type: ADD_FARM_DETAILS_REQUEST})
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.post(`${url}`, farmDetails, config)

        dispatch({type:ADD_FARM_DETAILS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:ADD_FARM_DETAILS_FAIL, payload: error.response.data})
    }
}

export const updateFarmPest = (updatedLevel) => async(dispatch) => {
    try {
        dispatch({type: UPDATE_FARM_PEST_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.patch(`${url}/${updatedLevel.id}/pests`, updatedLevel, config)

        dispatch({type:UPDATE_FARM_PEST_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:UPDATE_FARM_PEST_FAIL, payload: error.response.data})
    }
}

export const updateFarmDisease = (updatedLevel) => async(dispatch) => {
    try {
        dispatch({type: UPDATE_FARM_DISEASE_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.patch(`${url}/${updatedLevel.id}/diseases`, updatedLevel, config)

        dispatch({type:UPDATE_FARM_DISEASE_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:UPDATE_FARM_DISEASE_FAIL, payload: error.response.data})
    }
}

export const updateFarmPractice = (updatedLevel) => async(dispatch) => {
    try {
        dispatch({type: UPDATE_FARM_PRACTICES_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const {data} = await axios.patch(`${url}/${updatedLevel.id}/practices`, updatedLevel, config)

        dispatch({type:UPDATE_FARM_PRACTICES_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:UPDATE_FARM_PRACTICES_FAIL, payload: error.response.data})
    }
}

export const updateFarmDetails = (farm, farmId) => async(dispatch) => {
    try {
        dispatch({type: UPDATE_FARM_DETAILS_REQUEST})
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
        }

        const {data} = await axios.put(`${url}/${farmId}`, farm, config)

        dispatch({type:UPDATE_FARM_DETAILS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type:UPDATE_FARM_DETAILS_FAIL, payload: error.response.data})
    }
}