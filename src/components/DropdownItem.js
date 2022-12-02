import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './DropdownItem.css';


const ShopItem = () => {

    const [catagories, setCatagories] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() =>{
        axios("http://localhost:4000/catagories")
        .then(response => setCatagories(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, []);


    return loading ? <p>Loading...</p> : (

    <>
        <div className="menu-container">
            <Link to="./shop">Browse Catagories</Link>
            {catagories.map(catagories => (
                <li key={catagories.id}>
                    <Link to={`/catagories/${catagories.type}`}>{catagories.type}</Link>
                </li>
            ))}
        </div>
    </>
    );
}
export default ShopItem;