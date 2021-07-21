import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFarmDetails} from '../../actions/farmsActions'
import FarmPests from './FarmPests'
import FarmDiseases from './FarmDiseases'
import FarmPractices from './FarmPractices'

const FarmProfile = ({match, history}) => {

    const dispatch = useDispatch()


    const farmDetails = useSelector(state => state.farmDetails)
    const {loading, error, farm} = farmDetails

    useEffect(() => {
        dispatch(getFarmDetails(match.params.id))
    }, [dispatch, match])

    const handleReload = () => {
        history.go(0)
    }
    
    return (
        <>
            {loading ? <p>loading</p> : error ? <p>{error}</p> :
            farm && (
            <div>
                <h2>Farm Details</h2>
                <div>
                    <Link to={'/farms'}>Go back to Farms</Link>
                </div>
                <div>
                    <Link to={'/farmers'}>Go back to Farmers</Link>
                </div>
                <div>
                    <Link to={`/farmers/${farm.fk_farmer}`}>Go back to Farmer Profile</Link>
                </div>
                <div>
                    <Link to={`/farms/${match.params.id}/edit`}>Edit profile</Link>
                </div>
                <p><strong>Farm Owner:</strong><Link to={`/farmers/${farm.fk_farmer}`}> {`${farm.first_name} ${farm.last_name}`} </Link></p>
                <p><strong>Farm Address:</strong> {`${farm.barangay}, ${farm.municipality}`}</p>
                <p><strong>Coordinates:</strong> {`(${farm.latitude}, ${farm.longitude})`}</p>
                <p><strong>Farm Area:</strong> {`${farm.farm_area} hectares`}</p>
                <div><strong>Number of trees:</strong> 
                    <p><em>Less than 5 years old: </em> {farm.less_than_five_years_trees} trees</p>
                    <p><em>More than or equal to 5 years old: </em> {farm.five_years_or_more_trees} trees</p>
                    <p><em>Total Trees: </em> {`${farm.less_than_five_years_trees + farm.five_years_or_more_trees} trees`} </p>
                </div>
                <div><strong>Production:</strong> 
                    <p><em>Peak season: </em> {farm.peak_season_production}</p>
                    <p><em>Off season: </em> {farm.off_season_production} </p>
                </div>
                <div>
                    <p>Farm Notes:</p>
                    <textarea readOnly value={farm.farm_notes}></textarea>
                </div>
                <div>
                    <h3>Farm Pests</h3>
                    <FarmPests farmId={match.params.id} reload={handleReload}/>
                </div>
                <div>
                    <h3>Farm Diseases</h3>
                    <FarmDiseases farmId={match.params.id} reload={handleReload}/>
                </div>
                <div>
                    <h3>Farm Practices</h3>
                    <FarmPractices farmId={match.params.id} history={history} reload={handleReload}/>
                </div>

            </div>
            )
            }
        </>
    )
}

export default FarmProfile
