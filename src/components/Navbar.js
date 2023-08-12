import logo from '../images/planet.png';

function Navbar() {
    return (<header>
          <nav className='nav'>
            <img src={logo} alt="logo"  className='nav-logo'/>
            <h3 className="nav--text">My Travel Journel</h3>
            </nav>
            
    </header>);
}

export default Navbar;
  