import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = () => {
    return ( 
        <nav>
                <img src="img/hifi_logo" alt="" />
            <ul>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/ContactUs">Contact us</Link></li>
                
            </ul>
        </nav>
)}
 
export default NavItem;