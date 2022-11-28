import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = () => {
    return ( 
        <nav>
                <span className='box_logo'><p className='box_logo p'>HIFI</p></span>
            <ul>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/ContactUs">Contact us</Link></li>
                
            </ul>
        </nav>
)}
 
export default NavItem;