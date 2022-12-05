import './ProductCard.css';
import { Link } from 'react-router-dom';
const Product = () => {
    return ( 
        <>
          <h1>Popular Products</h1>  
            <article>
                <p className='readMore__btn readMore__btn__text' >
                    <Link to="/Product" className='readMoreText'>Read More</Link>
                </p>
            </article>

        
                
        </>
     );
}
 
export default Product;

