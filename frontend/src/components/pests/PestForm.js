import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addPest } from '../../actions/pestsActions'

const PestForm = () => {
    const [pest, setPest] = useState('')
    const [pestDescription, setPestDescription] = useState('')

    const dispatch = useDispatch()

    const addPestHandler = (e) => {
        e.preventDefault()

        if(!pest) {
            alert('enter a pest name')
        } else {
            dispatch(addPest(pest, pestDescription))
            setPest('')
        }
        
        
        
    }
    return (
        <div>
            <Link to='/pests'>Go back</Link>
            <h2>Add Pest</h2>
           <form>
               <div>
                 <input type='text' placeholder='Pest name' value={pest} onChange={e => setPest(e.target.value)} />  
               </div>
               <div>
                 <textarea placeholder='Pest description' value={pestDescription} onChange={e => setPestDescription(e.target.value)}></textarea>
               </div>
               <button type='submit' onClick={addPestHandler}>Add Pest</button>
            </form> 
        </div>
    )
}

export default PestForm
