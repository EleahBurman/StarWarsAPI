import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarShips } from "../../services/sw-api.js";

const StarShips = () => {
  const [allStarShips, setAllStarShips]= useState([])


  useEffect(()=> {
    const fetchAllStarShips= async () => {
      const starShipsData= await getAllStarShips()
      setAllStarShips(starShipsData.results)
    }
    fetchAllStarShips()
  }, [])

  if(!allStarShips.length) return <h1>Loading all Starships...</h1>

  return ( 
    <>
      <div className="starShips">
        {allStarShips.map((starship)=> {
          let starshipId= starship.url.slice(32)
          return <Link to={`starShips/${starshipId}`} key={starshipId}>{starship.name}</Link>
        })}
      </div>
    </>
  )
}

export default StarShips