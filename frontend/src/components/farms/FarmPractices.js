import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFarmPractices, updateFarmPest, updateFarmPractice } from '../../actions/farmsActions'
import FarmPestsRow from './FarmPestsRow'
import FarmPracticesRow from './FarmPracticesRow'

const FarmPractices = ({farmId, reload}) => {
    const dispatch = useDispatch()

    const farmPractices = useSelector(state => state.farmPractices)
    const {loading, error, practices} = farmPractices

    

    
    useEffect(() => {
        if(farmId) {
            dispatch(getFarmPractices(farmId))
        }
    
    },[dispatch])
    
    const handleSave = (e, practiceId, newPracticeLevel) => {
        e.preventDefault()
        const updatedLevel = {
            id: practiceId,
            newLevel: Boolean(newPracticeLevel)
        }

        dispatch(updateFarmPractice(updatedLevel))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Farm Practice</th>
                    <th>Practiced in Farm?</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {practices && practices.map(practice => (
                    <FarmPracticesRow key={practice.id} practice={practice} handleSave={handleSave} reload={reload} />
                ))}
                </tbody>
        </table>
       
    )
}

export default FarmPractices
