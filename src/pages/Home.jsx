import { Helmet } from "react-helmet-async";
import NewRecipies from "../components/ExtraSection/NewRecipies";
import OfferPage from "../components/ExtraSection/OfferPage";
import FeaturedFood from "../components/FeaturedFood/FeaturedFood";
import Banner from "../components/shared/Banner";


const Home = () => {
    return (
        <div>
          <Helmet><title>Foody | Home</title></Helmet>
          <Banner/>
          <FeaturedFood/>
          <OfferPage/>
          <NewRecipies/>
        </div>
    );
};

export default Home;