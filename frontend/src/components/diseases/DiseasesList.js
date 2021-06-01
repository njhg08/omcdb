import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDiseases} from '../../actions/diseasesActions'

const DiseasesList = () => {
    const dispatch = useDispatch()

    const diseasesList = useSelector(state => state.diseasesList)
    const {loading, error, diseases} = diseasesList

    useEffect(() => { 
        dispatch(getDiseases())
    }, [dispatch])

    return (
        <div>
            <ul>
                {diseases && diseases.map(disease => (
                    <li key={disease.id}>{disease.disease}</li>
                ))}
            </ul>
        </div>
    )
}

export default DiseasesList
