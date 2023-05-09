import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStarship } from "../../services/sw-api";
import { Link } from "react-router-dom";
import './StarshipPage.jsx'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails]= useState({})
  const { starshipId } = useParams()

  useEffect(()=> {
    const fetchDetails= async () => {
      const starshipData= await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if(!starshipDetails.length) return <h1>Loading details...</h1>
  return (
    <div className="starship-details">
      <p>Name: {starshipDetails.name}</p>
      <p>Model: {starshipDetails.model}</p>
      <Link to={'/'}>Return</Link>
    </div>
    )
  }

export default StarshipDetails