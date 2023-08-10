import logo from '../images/airbnb.png';

function Navbar() {
    return (<header>
          <nav className='nav'>
            <img src={logo} alt="logo"  className='nav-logo'/>
            </nav>
    </header>);
}

export default Navbar;
  