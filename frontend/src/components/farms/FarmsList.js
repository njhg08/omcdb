import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getFarms } from '../../actions/farmsActions'

const FarmsList = () => {
    const dispatch = useDispatch()

    const farmsList = useSelector(state => state.farmsList)
    const {farms} = farmsList


    useEffect(() => {
        dispatch(getFarms())
    }, [dispatch])

    return (
        <table className="farmers-table">
            <thead>
                <tr>
                    <th>Farm Owner</th>
                    <th>Barangay</th>
                    <th>Municipality</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {farms && farms.map(farm => (
                    <tr key={farm.id}>
                        <td>{`${farm.first_name} ${farm.last_name}`}</td>
                        <td>{farm.barangay}</td>
                        <td>{farm.municipality}</td>
                        <td>{farm.latitude}</td>
                        <td>{farm.longitude}</td>
                        <td><Link to={`/farms/${farm.id}`}>See details</Link></td>
                    </tr>
                    
                ))}
                
            </tbody>
        </table>
    )
}

export default FarmsList
