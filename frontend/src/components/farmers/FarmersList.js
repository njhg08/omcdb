import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getFarmers} from '../../actions/farmersActions'
import {Link} from 'react-router-dom'

const FarmersList = () => {
    const dispatch = useDispatch()

    const farmersList = useSelector(state => state.farmersList)
    const {farmers} = farmersList


    useEffect(() => {
        dispatch(getFarmers())
    }, [dispatch, farmers])

    return (
    <>
        <p>Number of Farmers: {farmers.length}</p>
        <table className="farmers-table">
            <thead>
                <tr>
                    <th>Farmer Name</th>
                    <th>Barangay</th>
                    <th>Municipality</th>
                    <th>Contact No.</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody>
                {farmers && farmers.map(farmer => (
                    <tr key={farmer.id} className='table-row'>
                        <td>{`${farmer.first_name} ${farmer.last_name}`}</td>
                        <td>{farmer.barangay}</td>
                        <td>{farmer.municipality}</td>
                        <td>{farmer.phone_number}</td>
                        <td><Link to={`/farmers/${farmer.id}`}>See profile</Link></td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </>
    )
}

export default FarmersList
