import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFarmerDetails, getFarmers, updateFarmerDetails } from '../../actions/farmersActions'
import FarmerAddressDropDown from './FarmerAddressDropDown'

const FarmerProfileEdit = ({match, history}) => {

    const dispatch = useDispatch()


    const farmerDetails = useSelector(state => state.farmerDetails)
    const {loading, error, farmer} = farmerDetails
    const {
        first_name,
        last_name,
        phone_number,
        fk_civil_status,
        fk_municipality,
        fk_barangay,
        age,
        farming_experience,
        fk_education,
        male_household,
        female_household,
        fk_financing
    } = farmer

    const [firstName, setFirstName] = useState(first_name)
    const [lastName, setLastName] = useState(last_name)
    const [civilStatus, setCivilStatus] = useState(fk_civil_status)
    const [phoneNumber, setPhoneNumber] = useState(phone_number)
    const [farmerAge, setFarmerAge] = useState(age)
    const [farmingExperience, setFarmingExperience] = useState(farming_experience)
    const [selectedMunicipality, setSelectedMunicipality] = useState(fk_municipality)
    const [selectedBarangay, setSelectedBarangay] = useState(fk_barangay)
    const [education, setEducation] = useState(fk_education)
    const [financing, setFinancing] = useState(fk_financing)
    const [maleHousehold, setMaleHousehold] = useState(male_household)
    const [femaleHousehold, setFemaleHousehold] = useState(female_household)

    useEffect(() => {
        dispatch(getFarmerDetails(match.params.id)) 
        console.log(farmer)
    }, [dispatch, match])

    const updateFarmerHandler = (e) => {
        e.preventDefault()
        const updatedFarmerDetails = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            age: farmerAge,
            farming_experience: farmingExperience,
            fk_civil_status: Number(civilStatus),
            fk_municipality: Number(selectedMunicipality),
            fk_barangay: Number(selectedBarangay),
            fk_education: Number(education),
            fk_financing: Number(financing),
            male_household: maleHousehold,
            female_household: femaleHousehold,
        }

        dispatch(updateFarmerDetails(updatedFarmerDetails, match.params.id))
        history.push(`/farmers/${match.params.id}`)
    }
    return (
        <div>
            {loading ? <p>loading</p> : error ? <p>{error}</p> : 
            <>
                <Link to={`/farmers/${match.params.id}`}>Cancel</Link>
                {farmer && 
                <>
                    <div>
                        <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <input type='text' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} maxLength='11'/>
                    
                    <p><strong>Age:</strong>  <input type="number" value={farmerAge} onChange={e => e.target.value >=0 &&  setFarmerAge(e.target.value)}/></p>
                    <p><strong>Civil Status:</strong>  
                    <select value={civilStatus} onChange={e => setCivilStatus(e.target.value)}>
                            <option value="1">Single</option>
                            <option value="2">Married</option>
                            <option value="3">Separated</option>
                            <option value="4">Widowed</option>
                        </select>
                    </p>
                    <p><strong>Address:</strong>  
                    <FarmerAddressDropDown municipality={selectedMunicipality} selectedMunicipality={setSelectedMunicipality} barangay={selectedBarangay} selectedBarangay={setSelectedBarangay}/>
                    </p>
                    <p><strong>No. of years as calamansi farmer:</strong>  <input type="number" value={farmingExperience} onChange={e => e.target.value >=0 && setFarmingExperience(e.target.value)} /></p>
                    <p><strong>Educational Attainment:</strong>  
                    <select value={education} onChange={e => setEducation(e.target.value)} >
                            <option value='0' disabled>--SELECT EDUCATION--</option>
                            <option value="1">None</option>
                            <option value="2">Elementary</option>
                            <option value="3">High School</option>
                            <option value="4">College</option>
                            <option value="5">Vocational</option>
                            <option value="6">Graduate School</option>
                        </select>
                    </p>
                    <p><strong>Source of Financing:</strong>  
                    <select value={financing} onChange={e => setFinancing(e.target.value)}>
                            <option value='0' disabled>--SELECT FINANCING--</option>
                            <option value="1">Own Money</option>
                            <option value="2">Loan</option>
                            <option value="3">Combined (Own and Loan)</option>
                        </select></p>
                    <p><strong>Total number of persons in household:</strong>  
                    Male: <input type="number" value={maleHousehold} onChange={e => e.target.value >= 0 && setMaleHousehold(e.target.value)}/>
                    Female: <input type="number" value={femaleHousehold} onChange={e => e.target.value >= 0 && setFemaleHousehold(e.target.value)}/>
                    </p>
                    <button type='submit' onClick={updateFarmerHandler}>Save</button>
                </>
                }
                
            </>
            }
        </div>
    )
}

export default FarmerProfileEdit
