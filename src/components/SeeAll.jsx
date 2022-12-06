import './SeeAll.scss';
import { Link } from 'react-router-dom';
import {useState} from 'react';


const SeeAll = () => {
    return ( 
        <>
        <span className='SeeAllProducts__btn'>
            <p className='SeeAllProducts'><Link to="/Products" className='SeeAllProducts__text'>See all products</Link></p>
            </span>
        </>
     );
}
 
export default SeeAll;