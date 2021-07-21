import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFarmDiseases, updateFarmDisease } from '../../actions/farmsActions'
import FarmDiseasesRow from './FarmDiseasesRow'

const FarmDiseases = ({farmId, reload}) => {
    const dispatch = useDispatch()

    const farmDiseases = useSelector(state => state.farmDiseases)
    const {loading, error, diseases} = farmDiseases

    

    
    useEffect(() => {
        if(farmId) {
            dispatch(getFarmDiseases(farmId))
        }
    
    },[dispatch])
    
    const handleSave = (e, diseaseId, newDiseaseLevel) => {
        e.preventDefault()
        const updatedLevel = {
            id: diseaseId,
            newLevel: Number(newDiseaseLevel)
        }

        dispatch(updateFarmDisease(updatedLevel))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Disease</th>
                    <th>Severity Level</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {diseases && diseases.map(disease => (
                    <FarmDiseasesRow key={disease.id} disease={disease} handleSave={handleSave} reload={reload} />
                ))}
                </tbody>
        </table>
       
    )
}

export default FarmDiseases
