import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getBarangays, getMunicipalities } from '../actions/addressActions'

const Test = () => {
    const dispatch = useDispatch()
    const [selectedMunicipality, setSelectedMunicipality] = useState(1)

    const municipalities = useSelector((state) => state.municipalitiesList)
    const barangays = useSelector(state => state.barangaysList)

    const handleMunicipalitySelect = (e) => {
        setSelectedMunicipality(parseInt(e.target.value))
    }

    useEffect(() => {
        dispatch(getMunicipalities())
        dispatch(getBarangays(selectedMunicipality))
    }, [dispatch, barangays, selectedMunicipality])

    return (
        <div>
            <select onChange={handleMunicipalitySelect} value={selectedMunicipality}>
                {municipalities.map(municipality => (
                    <option key={municipality.id} value={municipality.id}>{municipality.municipality}</option>
                ))}
            </select>

            <select>
                {barangays && barangays.map(barangay => (
                    <option key={barangay.id}>{!barangay.other_name ? barangay.barangay : `${barangay.barangay} (${barangay.other_name})`}</option>
                ))}
            </select>
        </div>
    )
}

export default Test
