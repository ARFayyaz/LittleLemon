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
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/reservations'>Reservations</a>
          </li>
          <li>
            <a href='/onlineorder'>Order Online</a>
          </li>
          <li>
            <a href='/login'>Login</a>
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
            <a href='/about'>Phone</a>
          </li>
          <li>
            <a href='/menu'>Email</a>
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
            <a href='/about'>Phone</a>
          </li>
          <li>
            <a href='/menu'>Email</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
