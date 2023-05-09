// npm modules
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to='/'><img id='nav-logo' src="src/assets/images/princessleia.png" alt="prinessleia" width='32'/></Link>
        <div id="nav-links">
          <Link to='/starships'>STARSHIPS</Link>
          <Link to='/planets'>PLANETS</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar