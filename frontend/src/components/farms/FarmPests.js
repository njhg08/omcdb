import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFarmPests, updateFarmPest } from '../../actions/farmsActions'
import FarmPestsRow from './FarmPestsRow'

const FarmPests = ({farmId, reload}) => {
    const dispatch = useDispatch()

    const farmPests = useSelector(state => state.farmPests)
    const {loading, error, pests} = farmPests

    

    
    useEffect(() => {
        if(farmId) {
            dispatch(getFarmPests(farmId))
        }
    
    },[dispatch])
    
    const handleSave = (e, pestId, newPestLevel) => {
        e.preventDefault()
        const updatedLevel = {
            id: pestId,
            newLevel: Number(newPestLevel)
        }

        dispatch(updateFarmPest(updatedLevel))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Pest</th>
                    <th>Infestation Level</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {pests && pests.map(pest => (
                    <FarmPestsRow key={pest.id} pest={pest} handleSave={handleSave} reload={reload} />
                ))}
                </tbody>
        </table>
       
    )
}

export default FarmPests
