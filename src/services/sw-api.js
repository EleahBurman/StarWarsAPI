const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(starshipId){
  const res = await fetch (`${baseUrl}/starships/${starshipId}`)
  console.log('res===>', starshipId)
  return res.json()
}

export async function getAllPlanets() {
  const res = await fetch(`${baseUrl}/planets`)
  return res.json()
}

export async function getPlanet(planetId){
  const res = await fetch (`${baseUrl}/planets/${planetId}`)
  return res.json()
}
