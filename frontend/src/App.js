import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Farmers from './components/farmers/Farmers'
import Pests from './components/pests/Pests'
import Diseases from './components/diseases/Diseases'
import Practices from './components/practices/Practices'
import Maps from './components/maps/Maps'
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Farms from './components/farms/Farms'
import Footer from './components/footer/Footer'
import FarmerFormModal from './components/farmers/FarmerFormModal'
import FarmerProfile from './components/farmers/FarmerProfile'
import FarmForm from './components/farms/FarmForm'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Router>
      {isModalOpen && (
          <FarmerFormModal isModalOpen={isModalOpen} toggleModal={toggleModal}/>
        )}
      <Header/>
      <main>
        <div className="container">
          <Switch>
            <Route path='/farmers/:id' component={FarmerProfile} exact/>
            <Route path='/farmers' exact>
              <Farmers toggleModal={toggleModal} />
            </Route> 
            <Route path='/farms'  component={Farms} />
            <Route path='/farms/addfarm' component={FarmForm} />
            <Route path='/pests'  component={Pests} />
            <Route path='/diseases'  component={Diseases} />
            <Route path='/practices'  component={Practices} />
            <Route path='/maps'  component={Maps} />
            <Route path='/' component={Dashboard} exact  />
          </Switch>
        </div>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
