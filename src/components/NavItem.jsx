import { Link } from 'react-router-dom';
import './NavItem.scss';
const NavItem = () => {
    return ( 
        <nav>
            <ul>
               <Link to="/"></Link>
               <Link to="/AboutUs"></Link>
                <Link to="/ContactUs"></Link>
                <Link to="/Shop"></Link>
                
            </ul>
        </nav>
)}
 
export default NavItem;