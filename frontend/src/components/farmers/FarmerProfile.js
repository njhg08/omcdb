import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFarmerDetails, getFarmers } from '../../actions/farmersActions'
import { getFarmerFarms } from '../../actions/farmsActions'

const FarmerProfile = ({match}) => {

    const dispatch = useDispatch()


    const farmerDetails = useSelector(state => state.farmerDetails)
    const {loading, error, farmer} = farmerDetails
    const farmerFarms = useSelector(state => state.farmerFarms)
    const {farms} = farmerFarms

    useEffect(() => {
        dispatch(getFarmerDetails(match.params.id)) 
        dispatch(getFarmerFarms(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            {loading ? <p>loading</p> : error ? <p>{error}</p> : 
            <>
                <Link to='/farmers'>Go back</Link>
                {farmer && 
                <>
                    <h2>{`${farmer.first_name} ${farmer.last_name}`}</h2>
                    <p><em>{farmer.phone_number ? farmer.phone_number : 'No contact number'}</em></p>
                    <Link to={`/farmers/${match.params.id}/edit`}>Edit profile</Link>
                    <p><strong>Age:</strong> {farmer.age}*</p>
                    <p><strong>Civil Status:</strong> {farmer.civil_status}</p>
                    <p><strong>Address:</strong> {`${farmer.barangay}, ${farmer.municipality}`}</p>
                    <p><strong>No. of years as calamansi farmer:</strong> {farmer.farming_experience} years</p>
                    <p><strong>Educational Attainment:</strong> {farmer.education}</p>
                    <p><strong>Source of Financing:</strong> {farmer.financing}</p>
                    <p><strong>Total number of persons in household:</strong> {`${farmer.male_household + farmer.female_household} (${farmer.male_household} male, ${farmer.female_household} female)`}</p>
                    <div>
                        <h3>Farms</h3>
                        <Link to={`/farmers/${farmer.id}/farms/addfarm/details`}>Add Farm</Link>
                        <table className="farmers-table">
                            <thead>
                                <tr>
                                    <th>Barangay</th>
                                    <th>Municipality</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {farms && farms.map(farm => (
                                    <tr key={farm.id}>
                                        <td>{farm.barangay}</td>
                                        <td>{farm.municipality}</td>
                                        <td>{farm.latitude}</td>
                                        <td>{farm.longitude}</td>
                                        <td><Link to={`/farms/${farm.id}`}>See details</Link></td>
                                    </tr>
                                    
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                    
                </>
                }
                
            </>
            }
        </div>
    )
}

export default FarmerProfile
