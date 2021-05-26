import React, { useRef, useState } from 'react'
import FarmerAddressDropDown from './FarmerAddressDropDown'

const FarmerFormModal = ({isModalOpen, toggleModal}) => {
    const modalRef = useRef()
    const [validationErrors, setValidationErrors] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState(0)
    const [civilStatus, setCivilStatus] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [age, setAge] = useState(0)
    const [farmingExperience, setFarmingExperience] = useState(0)
    const [selectedMunicipality, setSelectedMunicipality] = useState(0)
    const [selectedBarangay, setSelectedBarangay] = useState(0)
    const [education, setEducation] = useState(0)
    const [financing, setFinancing] = useState(0)
    const [maleHousehold, setMaleHousehold] = useState(0)
    const [femaleHousehold, setFemaleHousehold] = useState(0)

    const addNewFarmer = (e) => {
        e.preventDefault()
        toggleModal()
    }


    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            toggleModal()
        }
    }
    
    return (
        <div className='form-modal' onClick={closeModal} ref={modalRef} >
            <form className='modal-content'>
                {validationErrors.map(error => (
                    <p className="error-message">{error}</p>
                ))}
                <div className='modal-header'>
                    <h3>Add New Farmer</h3>
                    <button onClick={toggleModal} className='modal-close'>x</button>
                </div>
                <div className='input-group'>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className='input-group'>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/> 
                </div>
                <div className='input-group input-group-with-subgroup-1'>
                    <div>
                        <label>Sex: </label>
                        <select value={sex} onChange={e=>setSex(e.target.value)}>
                            <option value="0" disabled>--SELECT SEX--</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Civil Status:</label>
                        <select value={civilStatus} onChange={e => setCivilStatus(e.target.value)}>
                            <option value="1">Single</option>
                            <option value="2">Married</option>
                            <option value="3">Separated</option>
                            <option value="4">Widowed</option>
                        </select>
                    </div>
                </div>
                <div className='input-group input-group-with-subgroup-1'>
                    <div>
                        <label>Age:</label>
                        <input type="number" value={age} onChange={e => e.target.value >= 0 && setAge(e.target.value)}/>
                    </div>
                    <div>
                        <label>Farming Experience:</label>
                        <input type="number" value={farmingExperience} onChange={e => e.target.value >=0 && setFarmingExperience(e.target.value)} placeholder='Farming Experience'/>
                    </div>
                </div>
                <div className='input-group input-group-address'>
                    <FarmerAddressDropDown municipality={selectedMunicipality} selectedMunicipality={setSelectedMunicipality} barangay={selectedBarangay}selectedBarangay={setSelectedBarangay}/>
                </div>
                
                <div className='input-group input-group-with-subgroup-2'>
                    <div>
                        <label>Contact No.:</label>
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} maxLength='11'/>
                    </div>
                    <div>
                        <label>Education:</label>
                        <select value={education} onChange={e => setEducation(e.target.value)}>
                            <option value='0' disabled>--SELECT EDUCATION--</option>
                            <option value="1">None</option>
                            <option value="2">Elementary</option>
                            <option value="3">High School</option>
                            <option value="4">Undergraduate</option>
                            <option value="5">Graduate</option>
                        </select>
                    </div>
                    <div>
                        <label>Source of Financing:</label>
                        <select value={financing} onChange={e => setFinancing(e.target.value)}>
                            <option value='0' disabled>--SELECT FINANCING--</option>
                            <option value="1">Own Money</option>
                            <option value="2">Loan</option>
                            <option value="3">Combined (Own and Loan)</option>
                        </select>
                    </div>
                </div> 
                <div className='input-group'>
                    <p>Household Count</p>
                    <label>Male</label>
                    <input type="number" value={maleHousehold} onChange={e => e.target.value >= 0 && setMaleHousehold(e.target.value)}/>
                    <label>Female</label>
                    <input type="number" value={femaleHousehold} onChange={e => e.target.value >= 0 &&  setFemaleHousehold(e.target.value)}/>
                </div>
                <div className='input-group'>
                    <button onClick={addNewFarmer} className='btn'>Add 
                    Farmer</button>    
                </div>       
            </form>
        </div>

    )
}

export default FarmerFormModal
