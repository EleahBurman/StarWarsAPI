// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// services 
import { getPlanet } from "../../services/sw-api"

const PlanetDetails = () => {
  const [planetDetails, setPlanetDetails] = useState({})
  const { planetId } = useParams()

  useEffect(() => {
    // Define an async function called fetchPlanetDetails
    const fetchPlanetDetails = async () => {
      // Call the getPlanet function with the planetId parameter and await the result
      const planetData = await getPlanet(planetId)
      // Set the planetDetails state with the data fetched from the API
      setPlanetDetails(planetData)
    }
    // Call the fetchPlanetDetails function when the planetId state changes
    fetchPlanetDetails()
  }, [planetId])
  

  const capitalizeFirstLetter = (str) => {
    if (str && typeof str === 'string') {
      const parts = str.split(',')
      // Capitalize the first letter of each part after the comma
      const capitalizedParts = parts.map(part => {
        const [firstWord, ...restWords] = part.split(' ')
        return firstWord.charAt(0).toUpperCase() + firstWord.slice(1).trim() + ' ' + restWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      })
      return capitalizedParts.join(', ')
    }
    return str
  }
  
  return (
    <>
      <h1>{planetDetails.name} Details</h1>
      <div className="planet-details-container">
        <div className="planet-details">
          <h3>Populations: {capitalizeFirstLetter(planetDetails.population)}</h3>
          <h3>Climate: {capitalizeFirstLetter(planetDetails.climate)}</h3>
          <h3>Terrain: {capitalizeFirstLetter(planetDetails.terrain)}</h3>
          <Link to='/planets'>RETURN</Link>
        </div>
      </div>
    </>
  )
}

export default PlanetDetails