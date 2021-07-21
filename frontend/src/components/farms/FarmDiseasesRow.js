import React, { useState } from 'react'


const FarmDiseasesRow = ({disease, handleSave, reload}) => {
    const [selectedFarmDiseaseLevel, setSelectedFarmDiseaseLevel] = useState(disease.fk_level)
    const [isEditMode, setIsEditMode] = useState(false)
    const handleLevelChange = (e, id, pest) => {
        setSelectedFarmDiseaseLevel(e.target.value)
        let farmDiseaseLevel = {id, disease, level: Number(selectedFarmDiseaseLevel)}
    }

    const handleOnSubmit = (e) => {
        handleSave(e, disease.id, selectedFarmDiseaseLevel)
        setIsEditMode(!isEditMode)
        reload()
    }

    return (
        <tr>
            {isEditMode ? (
                <>
                    <td>{disease.disease}</td> 
                    <td>
                        <select value={selectedFarmDiseaseLevel} onChange={e => handleLevelChange(e, disease.id, disease.disease, selectedFarmDiseaseLevel)}>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </td>
                    <td>
                        <button type='submit' onClick={handleOnSubmit}>Save</button>
                        <button type='button' onClick={e => setIsEditMode(!isEditMode)}>Cancel</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{disease.disease}</td> 
                    <td>
                        {disease.level}
                    </td>
                    <td>
                        <button type='button' onClick={e => setIsEditMode(!isEditMode)}>Edit</button>
                        
                    </td>
                </>
            )}
            
        </tr>
    )
}

export default FarmDiseasesRow
