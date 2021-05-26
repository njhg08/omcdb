import React, { useState } from 'react'
import FarmerFormModal from './FarmerFormModal'
import FarmersList from './FarmersList'



const Farmers = ({toggleModal}) => {
    return (
        <>
          <h2>Farmers</h2>
          <div className='farmers-toolbar'>
            <button onClick={toggleModal} className='btn'>+ Add Farmer</button>

            <div className='search-form'>
              <input type='text' placeholder='Search Farmer'/>
              <button className='btn'><i className='fas fa-search'></i></button>
            </div>
            
          </div>
          <FarmersList/>
        </>
    )
}

export default Farmers
