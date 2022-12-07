import { Outlet } from "react-router";
import Header from "./templates/Header";
import Footer from "./templates/Footer"


function App() {
  return (
    <>
    <Header/>
    <Footer/>
  
    <Outlet />
  
    </>
    
  );
}

export default App;
