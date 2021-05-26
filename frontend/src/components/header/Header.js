import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            {/* banner */}

            {/* navbar */}
            <nav>
                <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/farmers'>Farmers</Link></li>
                    <li><Link to='/farms'>Farms</Link></li>
                    <li><Link to='/pests'>Pests</Link></li>
                    <li><Link to='/diseases'>Diseases</Link></li>
                    <li><Link to='/practices'>Farming Practices</Link></li>
                    <li><Link to='/maps'>Maps</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
