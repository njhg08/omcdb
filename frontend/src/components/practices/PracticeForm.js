import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {addPractice} from '../../actions/practicesActions'

const PracticeForm = () => {
    const [practice, setPractice] = useState('')
    const [practiceDescription, setPracticeDescription] = useState('')

    const dispatch = useDispatch()

    const addPracticeHandler = (e) => {
        e.preventDefault()

        if(!practice) {
            alert('enter a farming practice')
        } else {
            dispatch(addPractice(practice, practiceDescription))
            setPractice('')
        }
        
        
        
    }
    return (
        <div>
            <Link to='/practices'>Go back</Link>
            <h2>Add Farming Practice</h2>
           <form>
               <div>
                 <input type='text' placeholder='Farming practice' value={practice} onChange={e => setPractice(e.target.value)} />  
               </div>
               <div>
                 <textarea placeholder='Farming practice description' value={practiceDescription} onChange={e => setPracticeDescription(e.target.value)}></textarea>
               </div>
               <button type='submit' onClick={addPracticeHandler}>Add Practice</button>
            </form> 
        </div>
    )
}

export default PracticeForm
