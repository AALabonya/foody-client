import NewRecipies from "../components/ExtraSection/NewRecipies";
import OfferPage from "../components/ExtraSection/OfferPage";
import Banner from "../components/shared/Banner";


const Home = () => {
    return (
        <div>
          <Banner/>
          <OfferPage/>
          <NewRecipies/>
        </div>
    );
};

export default Home;