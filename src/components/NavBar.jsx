import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import "./css/NavBar.css"

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='branding'>
        <h2>SLinda</h2>
      </Link>

      <ul>
        <li><Link to="/category/hogar">Hogar</Link></li>
        <li><Link to="/category/electrónica">Electrónica</Link></li>
        <li><Link to="/category/bebidas">Bebidas</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;