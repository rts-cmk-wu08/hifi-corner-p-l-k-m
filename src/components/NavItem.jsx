import { Link } from 'react-router-dom';
import './NavItem.scss';
const NavItem = () => {
    return ( 
        <nav>
            <ul>
               <Link to="/"></Link>
               <Link to="/AboutUs">About US</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/Shop"></Link>
                
            </ul>
        </nav>
)}
 
export default NavItem;