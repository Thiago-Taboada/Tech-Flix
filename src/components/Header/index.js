import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="nav-logo">
                <Link to='/' className='logo'>TECHFLIX</Link>
            </div>
            <div className='nav-links'>
                <Link to='/' className='nav'>Home</Link>
                <Link to='/cartaz' className='nav'>Em Cartaz</Link>
                <Link to='/lancamentos' className='nav'>Lançamentos</Link>
                <Link to='/favoritos' className='favoritos'>Meus Filmes</Link>
            </div>
        </header>
    );
  }
  
  export default Header;
  