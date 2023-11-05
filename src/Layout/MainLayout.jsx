import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navbar/>
          <div className="max-w-7xl mx-auto">
            <Outlet/>
          </div>
         <div className="max-w-7xl mx-auto">
          <Footer/>
         </div>
        </div>
    );
};

export default MainLayout;