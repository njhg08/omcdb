import React, { useState } from 'react'


const FarmPestsRow = ({pest, handleSave, reload}) => {
    const [selectedFarmPestLevel, setSelectedFarmPestLevel] = useState(pest.fk_level)
    const [isEditMode, setIsEditMode] = useState(false)
    const handleLevelChange = (e, id, pest) => {
        setSelectedFarmPestLevel(e.target.value)
        let farmPestLevel = {id, pest, level: Number(selectedFarmPestLevel)}
    }

    const handleOnSubmit = (e) => {
        handleSave(e, pest.id, selectedFarmPestLevel)
        setIsEditMode(!isEditMode)
        reload()
    }

    return (
        <tr>
            {isEditMode ? (
                <>
                    <td>{pest.pest}</td> 
                    <td>
                        <select value={selectedFarmPestLevel} onChange={e => handleLevelChange(e, pest.id, pest.pest, selectedFarmPestLevel)}>
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
                    <td>{pest.pest}</td> 
                    <td>
                        {pest.level}
                    </td>
                    <td>
                        <button type='button' onClick={e => setIsEditMode(!isEditMode)}>Edit</button>
                        
                    </td>
                </>
            )}
            
        </tr>
    )
}

export default FarmPestsRow
