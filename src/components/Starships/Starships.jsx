// npm module
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
  const fetchStarships = async () => {
    const starshipData = await getAllStarships()
    setStarships(starshipData.results)
  }
  fetchStarships()
  }, [])

  console.log(starships)

  if (!starships.length) return <h1>Loading Starships...</h1>

  return (
    <main>
      <h1>Starships</h1>
      <div className="card-container">
        {starships.map((starship, idx) => {
          const shipId = starship.url.slice(21)
          return (
            <div className="starship-card" key={idx}>
              <Link to={`${shipId}`}>{starship.name}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )

}
export default Starships