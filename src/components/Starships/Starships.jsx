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

  const capitalizeString = (str) => {
    return str
      .split(/\b/)
      .map(word => {
        if (word.trim() === '-') { 
          // if word is a hyphen, return it
          return '-'
        }
        // if the first letter is already uppercase or the entire word is in uppercase, return the word as is
        if (word.charAt(0).toUpperCase() === word.charAt(0) || word.toUpperCase() === word) {
          return word
        }
        // capitalize the first letter and make the rest of the letters lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join('')
  }
  

  if (!starships.length) return <h1>Loading Starships...</h1>

  return (
    <main>
      <h1>Starships</h1>
      <div className="card-container">
        {starships.map((starship, idx) => {
          const shipId = starship.url.slice(21)
          return (
            <div className="starship-card" key={idx}>
              <Link to={`${shipId}`}>{capitalizeString(starship.name)}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Starships
