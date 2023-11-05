import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import OfferPage from "../components/ExtraSection/OfferPage";
import NewRecipies from "../components/ExtraSection/NewRecipies";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
          <div className="max-w-7xl mx-auto">
            <Outlet/>
          </div>
         <div className="max-w-7xl mx-auto">
         <OfferPage/>
          <NewRecipies/>
          <Footer/>
         </div>
        </div>
    );
};

export default MainLayout;