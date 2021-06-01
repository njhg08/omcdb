import React from 'react'
import {Link} from 'react-router-dom'
import PestsList from './PestsList'

const Pests = () => {
    return (
        <div>
            Pests
            <Link to='/pests/addpest'>Add Pest</Link>
            <PestsList/>
        </div>
    )
}

export default Pests
