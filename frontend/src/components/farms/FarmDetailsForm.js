import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFarm, getFarms } from "../../actions/farmsActions"
import FarmerAddressDropDown from "../farmers/FarmerAddressDropDown"

const FarmForm = ({match, history}) => {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [farmArea, setFarmArea] = useState(0)
    const [lessThanFive, setLessThanFive] = useState(0)
    const [fiveOrMore, setFiveOrMore] = useState(0)
    const [peakSeason, setPeakSeason] = useState(0)
    const [offSeason, setOffSeason] = useState(0)
    const [selectedBarangay, setSelectedBarangay] = useState(0)
    const [selectedMunicipality, setSelectedMunicipality] = useState(0)
    const [farmNotes, setFarmNotes] = useState('')
    
    const dispatch = useDispatch();

    const addFarmDetails = useSelector(state => state.addFarmDetails)
    const {loading, farmDetails} = addFarmDetails

    const farmsList = useSelector(state => state.farmsList)
    const {farms} = farmsList

    const addFarmDetailsHandler = (e) => {
        e.preventDefault()
        const farm = {
            longitude, latitude,farmer: match.params.id, farmArea: Number(farmArea), lessThanFive: Number(lessThanFive), fiveOrMore: Number(fiveOrMore), peakSeason: Number(peakSeason), offSeason: Number(offSeason), municipality: Number(selectedMunicipality), barangay: Number(selectedBarangay), farmNotes
        }
        dispatch(addFarm(farm))
        history.push(`/farmers/${match.params.id}`)
    }
    return (
        <div>
            <h2>Add Farm Details</h2>
            <form>
                <div>
                    <label>Coordinates</label>
                    <div>
                        <label>Latitude: </label>
                        <input type='number' placeholder='Latitude' value={latitude} onChange={e =>setLatitude(e.target.value)} />
                    </div>
                    <div>
                        <label>Longitude: </label>
                        <input type='number' placeholder='Longitude' value={longitude} onChange={e =>setLongitude(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Farm Area:</label>
                    <input type='number' placeholder="in hectares" value={farmArea} onChange={e =>setFarmArea(e.target.value)}/>
                </div>
                <div>
                    <label>Number of Trees:</label>
                    <div>
                        <label>Less than five years old: </label>
                        <input type='number' placeholder='less than 5 years' value={lessThanFive} onChange={e =>setLessThanFive(e.target.value)}/>
                    </div>
                    <div>
                        <label>More than or equal to 5 years old:  </label>
                        <input type='number' placeholder='5 years or more' value={fiveOrMore} onChange={e =>setFiveOrMore(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Calamansi Production:</label>
                    <div>
                        <label>Peak Production: </label>
                        <input type='number' placeholder='during peak season' value={peakSeason} onChange={e =>setPeakSeason(e.target.value)}/>
                    </div>
                    <div>
                        <label>Off-Season Production: </label>
                        <input type='number' placeholder='during off season' value={offSeason} onChange={e =>setOffSeason(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <FarmerAddressDropDown municipality={selectedMunicipality} barangay={selectedBarangay} selectedMunicipality={setSelectedMunicipality} selectedBarangay={setSelectedBarangay}/>
                </div>
                <div>
                    <label>Farm Notes</label>
                    <textarea value={farmNotes} onChange={e => setFarmNotes(e.target.value)}></textarea>
                </div>
                <button type='submit' onClick={addFarmDetailsHandler}>Add Farm Details</button>
            </form>
            
        </div>
    )
}

export default FarmForm
