import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPests } from '../../actions/pestsActions'

const PestsList = () => {
    const dispatch = useDispatch()

    const pestsList = useSelector(state => state.pestsList)
    const {loading, error, pests} = pestsList

    useEffect(() => { 
        dispatch(getPests())
    }, [dispatch])
    return (
        <div>
            <ul>
                {pests && pests.map(pest => (
                    <li key={pest.id}>{pest.pest}</li>
                ))}
            </ul>
        </div>
    )
}

export default PestsList
