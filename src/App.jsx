// npm modules
import { Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Starships from './components/Starships/Starships'
import StarshipDetails from './components/Starships/StarshipPage'
import Planets from './components/Planets/Planets'
import PlanetDetails from './components/Planets/PlanetDetails'

// css
import './App.css'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/starships' element={<Starships />} />
      <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      <Route path='/planets' element={<Planets />} />
      <Route path='/planets/:planetId' element={<PlanetDetails />} />
    </Routes>
    </>
  )
}

export default App