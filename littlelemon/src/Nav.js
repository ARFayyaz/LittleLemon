import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className='nav sectionTitle'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/#about-section'>About</Link>
        </li>
        <li>
          <Link to='/#highlights-section'>Menu</Link>
        </li>
        <li>
          <Link to='/reservations' data-testid='reservationsLink'>
            Reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
