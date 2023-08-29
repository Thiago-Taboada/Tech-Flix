import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to='/' className='logo'>TECHFLIX</Link>
            <Link to='/favoritos' className='favoritos'>Meus Filmes</Link>
        </header>
    );
  }
  
  export default Header;
  