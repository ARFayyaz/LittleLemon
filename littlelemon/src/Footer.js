import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footerLogo'>
        <img src='assets/Logo.svg' alt='Logo' />
      </div>
      <nav>
        <p className='sectionTitle' style={{ color: "#495e57" }}>
          Doormat Navigation
        </p>
        <ul className='leadText'>
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
            <Link to='/reservations'>Reservations</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <p className='sectionTitle' style={{ color: "#495e57" }}>
          Contact
        </p>
        <ul className='leadText'>
          <li>
            <a href='/'>Address</a>
          </li>
          <li>
            <a href='/'>Phone</a>
          </li>
          <li>
            <a href='/'>Email</a>
          </li>
        </ul>
      </nav>
      <nav>
        <p className='sectionTitle' style={{ color: "#495e57" }}>
          Social Media Links
        </p>
        <ul className='leadText'>
          <li>
            <a href='/'>Address</a>
          </li>
          <li>
            <a href='/'>Phone</a>
          </li>
          <li>
            <a href='/'>Email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
