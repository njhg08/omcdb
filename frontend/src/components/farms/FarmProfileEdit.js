import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFarmerDetails, getFarmers} from '../../actions/farmersActions'
import { getFarmDetails, updateFarmDetails} from '../../actions/farmsActions'
import FarmerAddressDropDown from '../farmers/FarmerAddressDropDown'


const FarmProfileEdit = ({match, history}) => {

    const dispatch = useDispatch()


    const farmDetails = useSelector(state => state.farmDetails)
    const {loading, error, farm} = farmDetails
    
    const farmersList = useSelector(state => state.farmersList)
    const {farmers} = farmersList
    
    const [farmOwner, setFarmOwner] = useState(farm.fk_farmer)

    const farmerDetails = useSelector(state => state.farmerDetails)
    const {farmer} = farmerDetails

    useEffect(() => {  
        dispatch(getFarmDetails(match.params.id))
        dispatch(getFarmers())
        dispatch(getFarmerDetails(farmOwner))
        console.log(farm)
    }, [dispatch, match, farmOwner])

    const [selectedMunicipality, setSelectedMunicipality] = useState(farm.fk_municipality)
    const [selectedBarangay, setSelectedBarangay] = useState(farm.fk_barangay)
    const [latitude, setLatitude] = useState(farm.latitude)
    const [longitude, setLongitude] = useState(farm.longitude)
    const [farmArea, setFarmArea] = useState(farm.farm_area)
    const [lessThanFive, setLessThanFive] = useState(farm.less_than_five_years_trees)
    const [fiveOrMore, setFiveOrMore] = useState(farm.five_years_or_more_trees)
    const [peakSeason, setPeakSeason] = useState(farm.peak_season_production)
    const [offSeason, setOffSeason] = useState(farm.off_season_production)
    const [farmNotes, setFarmNotes] = useState(farm.farm_notes)
    
    const updateFarmHandler = (e) => {
        e.preventDefault()
        const updatedFarmDetails = {
            longitude: Number(longitude),
            latitude: Number(latitude),
            fk_farmer: Number(farmOwner),
            fk_municipality: Number(selectedMunicipality),
            fk_barangay: Number(selectedBarangay),
            farm_area: Number(farmArea),
            less_than_five_years_trees: Number(lessThanFive),
            five_years_or_more_trees: Number(fiveOrMore),
            peak_season_production: Number(peakSeason),
            off_season_production: Number(offSeason),
            farm_notes: farmNotes
        }

        dispatch(updateFarmDetails(updatedFarmDetails, match.params.id))
        history.push(`/farms/${match.params.id}`)
    }

    return (
        <>
            {loading ? <p>loading</p> : error ? <p>{error}</p> :
             
            <div>
                <h2>Edit Farm Details</h2>
                <Link to={`/farms/${match.params.id}`}>Cancel</Link>
                <p><strong>Farm Owner:</strong>
                    <select value={farmOwner} onChange={e => setFarmOwner(Number(e.target.value))}>
                        {farmers.sort(function(a,b) {
                            a = a.first_name.toLowerCase()
                            b = b.first_name.toLowerCase()
                            return a < b ? -1: a > b ? 1 : 0
                        }).map(farmer => (
                            <option value={farmer.id} key={farmer.id}>{`${farmer.first_name} ${farmer.last_name}`}</option>
                        ))}
                    </select>
                </p>
                <div>
                    <p><strong>Owner Address:</strong> {`${farmer.barangay}, ${farmer.municipality}`} </p>
                </div>
                <p><strong>Farm Address:</strong> <FarmerAddressDropDown municipality={selectedMunicipality} selectedMunicipality={setSelectedMunicipality} barangay={selectedBarangay} selectedBarangay={setSelectedBarangay}/> </p>
                <div>
                    <strong>Coordinates:</strong>
                    <p>Latitude: <input type='number' value={latitude} onChange={e => setLatitude(Number(e.target.value))}/> </p>
                    <p>Longitude: <input type='number' value={longitude} onChange={e => setLongitude(Number(e.target.value))}/> </p>
                </div>
                <p><strong>Farm Area (in hectares):</strong> <input type='number' value={farmArea} onChange={e => setFarmArea(Number(e.target.value))}/></p>
                <div><strong>Number of trees:</strong> 
                    <p><em>Less than 5 years old: </em> <input type='number' value={lessThanFive} onChange={e => setLessThanFive(Number(e.target.value))}/></p>
                    <p><em>More than or equal to 5 years old: </em> <input type='number' value={fiveOrMore} onChange={e => setFiveOrMore(Number(e.target.value))}/></p>
                    <p><em>Total Trees: </em> {`${fiveOrMore + lessThanFive} trees`} </p>
                </div>
                <div><strong>Production:</strong> 
                    <p><em>Peak season: </em> <input type='number' value={peakSeason} onChange={e => setPeakSeason(Number(e.target.value))}/></p>
                    <p><em>Off season: </em> <input type='number' value={offSeason} onChange={e => setOffSeason(Number(e.target.value))}/> </p>
                </div>
                <div>
                    <p>Farm Notes:</p>
                    <textarea value={farmNotes} onChange={e => setFarmNotes(e.target.value)}></textarea>
                </div>
                <button type='submit' onClick={updateFarmHandler}>Save</button>
            </div>
            
            }
        </>
    )
}

export default FarmProfileEdit
