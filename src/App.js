import { Outlet } from "react-router";
import Header from "./templates/Header";
import Product from "./templates/Product";
import BlackInfoBox from "./templates/BlackInfoBox";
import SeeAll from "./components/SeeAll";
function App() {
  return (
    <>
    <Header/>
  
    <Outlet />
    <Product/>
    <SeeAll/>
    
    <BlackInfoBox/>
    </>
    
  );
}

export default App;
