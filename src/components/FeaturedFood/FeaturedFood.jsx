import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
 
    const axios = useAxios()

    const featureFood = async()=>{
        const res= await axios.get("/getFood?sortField=foodQuantity&sortOrder=desc&limit=6")
        return res
    }
      const {data: foods, isLoading,isError} = useQuery({
        queryKey:[ "foods" ],
        queryFn: featureFood
      })

      console.log(foods?.data);

    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 ">Featured Foods</h1>
            <h3 className="text-center font-bold text-2xl mb-5">Sharing love, one meal at a time.</h3>
            <div className="grid md:grid-cols-3 gap-4">
                {
                  foods?.data.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)  
                }

            </div>
            <div className="space-y-3 text-center">
			<Link to="/availableFoods"><button className="btn btn-outline">Show All </button></Link>
		</div>
        </div>
    );
};

export default FeaturedFood;