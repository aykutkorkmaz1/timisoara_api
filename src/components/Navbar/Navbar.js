import './Navbar.css';
import { Link } from 'react-router-dom';
import {Search} from 'lucide-react';
import {CircleUserRound} from 'lucide-react';
import {Star} from 'lucide-react';
import {ShoppingBag} from 'lucide-react';

function Navbar() {
  return (
    <div className="Navbar">
        <div className='navbar-logo'>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/"><p>TIMISOARA</p></Link>
        </div>
        <div className='navbar-page-btns'>
            <button className='navbar-btn navbar-passive-btn'>Home</button>
            <button className='navbar-btn navbar-passive-btn'>Shop</button>
            <button className='navbar-btn navbar-passive-btn'>Products</button>
            <button className='navbar-btn navbar-passive-btn'>Pages</button>
        </div>
        <div className='navbar-icon-btns'>
            <button> <Search color="#181818" size={22} strokeWidth={1.5} /> </button>
            <button> <CircleUserRound color="#181818" size={22} strokeWidth={1.5} /> </button>
            <button> <Star color="#181818" size={22} strokeWidth={1.5} /> </button>
            <button> <ShoppingBag color="#181818" size={22} strokeWidth={1.5} /> </button>
        </div>
    </div>
  );
}

export default Navbar;