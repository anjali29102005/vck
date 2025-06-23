import {Link} from 'react-router-dom'
import "./Header.css"
const Header =() => {
  return(
    <div>
        <header>
          <Link to="/"  className="logo">
          Vivekanand Collage
          </Link>
          <div className='right'>
            <nav>
                <Link to="/home">Home</Link>
                <Link to= "/about">About</Link>
                <Link to= "/courses">Courses</Link>
                <Link to= "/contact">Contact</Link>
            </nav>
            <Link to={'#'} className="apply-btn">
            Apply Now!
            </Link>
            </div>
        </header>

    </div>
  );
};

export default Header;