import React from 'react'
import { Link } from 'react-router-dom'


const Practices = () => {
    return (
        <div>
            <h2>Farming Practices</h2>
            <Link to='/practices/addpractice'>Add Farming Practice</Link>
        </div>
    )
}

export default Practices
