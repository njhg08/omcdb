import React, { useState } from 'react'


const FarmPracticesRow = ({practice, handleSave, reload}) => {
    const [selectedFarmPracticeLevel, setSelectedFarmPracticeLevel] = useState(practice.practiced_in_farm)
    const [isEditMode, setIsEditMode] = useState(false)
    const handleLevelChange = (e) => {
        setSelectedFarmPracticeLevel(e.target.value)
        
    }

    const handleOnSubmit = (e) => {
        handleSave(e, practice.id, selectedFarmPracticeLevel)
        setIsEditMode(!isEditMode)
        reload()
    }

    return (
        <tr>
            {isEditMode ? (
                <>
                    <td>{practice.farm_practice}</td> 
                    <td>
                        <select value={selectedFarmPracticeLevel} onChange={e => handleLevelChange(e, practice.id, practice.farming_practice, selectedFarmPracticeLevel)}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </td>
                    <td>
                        <button type='submit' onClick={handleOnSubmit}>Save</button>
                        <button type='button' onClick={e => setIsEditMode(!isEditMode)}>Cancel</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{practice.farm_practice}</td> 
                    <td>
                        {String(practice.practiced_in_farm)}
                    </td>
                    <td>
                        <button type='button' onClick={e => setIsEditMode(!isEditMode)}>Edit</button>
                        
                    </td>
                </>
            )}
            
        </tr>
    )
}

export default FarmPracticesRow
