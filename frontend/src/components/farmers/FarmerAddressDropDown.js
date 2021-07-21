import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBarangays, getMunicipalities } from '../../actions/addressActions'

const FarmerAddressDropDown = ({municipality, barangay, selectedMunicipality, selectedBarangay}) => {
    const dispatch = useDispatch()

    const municipalities = useSelector((state) => state.municipalitiesList)
    const barangays = useSelector(state => state.barangaysList)

    const handleMunicipalitySelect = (e) => {
        selectedMunicipality(parseInt(e.target.value))
    }

    const handleBarangaySelect = (e) => {
        selectedBarangay(parseInt(e.target.value))
    }

    useEffect(() => {
        dispatch(getMunicipalities())
        dispatch(getBarangays(municipality))
    }, [dispatch, barangays, municipality])

    return (
        <>
            <label>Address:</label>
            <select onChange={handleMunicipalitySelect} value={municipality}>
                <option value='0' disabled>--SELECT MUNICIPALITY--</option>
                {municipalities.map(municipality => (
                    <option key={municipality.id} value={municipality.id}>{municipality.municipality}</option>
                ))}
            </select>

            <select value={barangay} onChange={handleBarangaySelect}>
                <option value='0' disabled>--SELECT BARANGAY--</option>
                {barangays && barangays.map(barangay => (
                    <option key={barangay.id} value={barangay.id}>{!barangay.other_name ? barangay.barangay : `${barangay.barangay} (${barangay.other_name})`}</option>
                ))}
            </select>
        </>
    )
}

export default FarmerAddressDropDown
