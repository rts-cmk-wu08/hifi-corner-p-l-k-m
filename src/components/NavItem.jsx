import { Link } from 'react-router-dom';
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';
import { useState } from 'react';
import './NavItem.css';
import ShopItem from './DropdownItem';

const NavItem = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav>
                <span className='box_logo'><p className='box_logo p'><Link to="/index" className='hifiText'> HI<br/>FI</Link></p></span>
                    <ul>
                        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                            <li><Link to="/Shop">Shop</Link></li>
                        </div>
                        <li><Link to="/AboutUs">About Us</Link></li>
                        <li><Link to="/ContactUs">Contact us</Link></li>
                    </ul>
                <span className='searchBar' ><input  type="search" placeholder='Search...'/> <AiOutlineUser className='userIcon'/> <AiOutlineShoppingCart className='cartIcon'/></span>
            </nav>
            <div className={`dropdown-menu_hidden ${open? 'active' : 'inactive'}`}>
                <ul>
                    <ShopItem/>
                </ul>
            </div>

        </>
)}

export default NavItem;