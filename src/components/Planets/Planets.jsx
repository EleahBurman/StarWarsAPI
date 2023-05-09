// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllPlanets } from "../../services/sw-api" 


const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect (() => {
    const fetchPlanets = async () => {
      const planetData = await getAllPlanets()
      setPlanets(planetData.results)
    }
    fetchPlanets()
  }, [])

  console.log(planets)

  if (!planets.length) return <h1>Loading Planets...</h1>

  return (
    <>
    <h1>Planets</h1>
    <div className="planet-container">
      {planets.map(planet => {
        const planetId = planet.url.slice(21)
        return (
          <div className="planet-card" key={planet.name}>
            <Link to={`${planetId}`}>{planet.name}</Link>
          </div>
        )
      
      })}
    </div>
    </>
  )
} 

export default Planets