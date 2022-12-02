
import { Link } from 'react-router-dom';
import './FooterReturns.scss';

const FooterReturns = () => {
    return (
        <div>
            <ul>
                <Link to="/Returns&Refunds">Returns & Refunds</Link>
                <Link to="/Delivery">Delivery</Link>
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
                <Link to="/Terms&Conditions">Terms & Conditions</Link>
            </ul>
        </div>
)}
 
export default FooterReturns;