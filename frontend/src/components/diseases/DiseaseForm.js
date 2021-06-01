import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addDisease } from '../../actions/diseasesActions'


const DiseaseForm = () => {
    const [disease, setDisease] = useState('')
    const [diseaseDescription, setDiseaseDescription] = useState('')

    const dispatch = useDispatch()

    const addDiseaseHandler = (e) => {
        e.preventDefault()

        if(!disease) {
            alert('enter a disease name')
        } else {
            dispatch(addDisease(disease, diseaseDescription))
            setDisease('')
        }
        
        
        
    }
    return (
        <div>
            <Link to='/diseases'>Go back</Link>
            <h2>Add Disease</h2>
           <form>
               <div>
                 <input type='text' placeholder='Disease name' value={disease} onChange={e => setDisease(e.target.value)} />  
               </div>
               <div>
                 <textarea placeholder='Disease description' value={diseaseDescription} onChange={e => setDiseaseDescription(e.target.value)}></textarea>
               </div>
               <button type='submit' onClick={addDiseaseHandler}>Add Disease</button>
            </form> 
        </div>
    )
}

export default DiseaseForm
