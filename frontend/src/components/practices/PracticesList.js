import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPractices } from '../../actions/practicesActions'

const PracticesList = () => {
    const dispatch = useDispatch()

    const practicesList = useSelector(state => state.practicesList)
    const {loading, error, practices} = practicesList

    useEffect(() => { 
        dispatch(getPractices())
    }, [dispatch])
    return (
        <div>
            <ul>
                {practices && practices.map(practice => (
                    <li key={practice.id}>{practice.farm_practice}</li>
                ))}
            </ul>
        </div>
    )
}

export default PracticesList
