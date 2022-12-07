
import './FooterComponent.css';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <div className="wrapper">
                <ul>
                    <li><Link to="/Shop">SHOP</Link></li>
                    <li><Link to="/AboutUs">ABOUT US</Link></li>
                    <li><Link to="/ContactUs">CONTACT US</Link></li>   
                </ul>
                <ul>
                    <li><Link to="/Returns&Refunds">Returns & Refunds</Link></li>
                    <li><Link to="/Delivery">Delivery</Link></li>
                    <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                    <li><Link to="/Terms&Conditions">Terms & Conditions</Link></li>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <i class="fa-solid fa-phone"></i>
                    <p>0131 556 7901</p>
                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <i class="fa-solid fa-phone"></i>
                    <p>01324 629 011</p>
                    <i class="fa-brands fa-facebook-square fa-2x"></i>
                    <i class="fa-brands fa-youtube-square fa-2x"></i>
                    <i class="fa-brands fa-twitter-square fa-2x"></i>
                    <i class="fa-brands fa-instagram-square fa-2x"></i>
                </ul>
                <div className="grid-1_2">
                    <i class="fa-brands fa-cc-stripe the fa-3x"></i>
                    <i class="fa-brands fa-cc-visa fa-3x"></i>
                    <i class="fa-brands fa-cc-mastercard fa-3x"></i>
                    <p>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                </div>
                <div>
                    <p>Designed & Built by WU07</p>
                </div>
        </div>
)}
 
export default FooterComponent;