// npm modules
//import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

//components
import StarshipDetails from './components/StarshipPage/StarshipPage'
import StarShips from './components/Starships/Starships'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<StarShips/>}/>
        <Route path='/starShips/:starshipId' element={<StarshipDetails/>}/>
      </Routes>
    </>
  )
}

export default App