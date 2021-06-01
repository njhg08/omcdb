import React from 'react'
import {Link} from 'react-router-dom'
import DiseasesList from './DiseasesList'

const Diseases = () => {
    return (
        <div>
            <h2>Diseases</h2>
            <Link to='/diseases/adddisease'>Add Disease</Link>
            <DiseasesList/>
        </div>
    )
}

export default Diseases
