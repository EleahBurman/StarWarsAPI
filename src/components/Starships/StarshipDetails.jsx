import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

// services
import { getStarship } from "../../services/sw-api"

const capitalizeFirstLetter = (string) => {
  if (!string) {
    return string;
  }
  
  return string.split(/[- ]+/).map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(" ")
}

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  console.log('starship', starshipDetails)
  
  if (!starshipDetails.length) return <h1>Loading Starship Details...</h1>

  return (
    <main>
      <h1>Starship Details</h1>
      <div className="card-container ">
        <div className="starship-details">
          <h3>Name: {capitalizeFirstLetter(starshipDetails.name)}</h3>
          <h3>Model: {capitalizeFirstLetter(starshipDetails.model)}</h3>
          <Link to='/starships'>RETURN</Link>
        </div>
      </div>
    </main>
  )
}

export default StarshipDetails
