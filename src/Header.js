import logo from './logo.svg';

function Header() {
    return (<header>
          <nav className='nav'>
            <img src={logo} alt="logo"  className='nav-logo'/>
            
              <ul className='nav-items'>
                <li>Home</li>
                <li>Price</li>
                <li>Contact</li>
              </ul>
            </nav>
    </header>);
}

export default Header;
  