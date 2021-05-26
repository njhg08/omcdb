import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFarmerDetails, getFarmers } from '../../actions/farmersActions'

const FarmerProfile = ({match}) => {

    const dispatch = useDispatch()


    const farmerDetails = useSelector(state => state.farmerDetails)
    const {loading, error, farmer} = farmerDetails

    useEffect(() => {
        dispatch(getFarmerDetails(match.params.id)) 
    }, [dispatch, match])

    return (
        <div>
            {loading ? <p>loading</p> : error ? <p>{error}</p> : 
            <>
                {farmer && 
                <>
                    <h2>{`${farmer.first_name} ${farmer.last_name}`}</h2>
                    <Link to='/farms/addfarm/'>Add Farm</Link>
                </>
                }
                
            </>
            }
        </div>
    )
}

export default FarmerProfile
