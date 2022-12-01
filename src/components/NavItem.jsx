import { Link } from 'react-router-dom';
import './NavItem.css';
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'

const NavItem = () => {
    return ( 
            <> 
        <nav>
        <span className='box_logo'><p className='box_logo p'><Link to="/index" className='hifiText'> HI<br/>FI</Link></p></span>     
            <ul>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/ContactUs">Contact us</Link></li>   
            </ul>
         <span className='searchBar' ><input  type="search" placeholder='Search...'/> <AiOutlineUser className='userIcon'/> <AiOutlineShoppingCart className='cartIcon'/></span>
        </nav>


        </>
)}
 
export default NavItem;