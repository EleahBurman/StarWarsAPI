// npm modules
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to='/'><img id='nav-logo' src="src/assets/images/millennium-falcon.png" alt="millennium falcon" width='32'/></Link>
        <div id="nav-links">
          <Link to='/starships'>STARSHIPS</Link>
          <Link to='/planets'>PLANETS</Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar