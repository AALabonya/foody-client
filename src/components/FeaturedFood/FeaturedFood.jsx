
import useAxios from "../../hooks/useAxios";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FeaturedFood = () => {
 
    const axios = useAxios()

    const uri ="/featuredFood"
const[featuresData, setFeature]= useState()

useEffect(()=>{
  axios.get(uri)
  .then(res=>setFeature(res.data))
},[axios])
    
      
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 ">Featured Foods</h1>
            <h3 className="text-center font-bold text-2xl mb-5">Sharing love, one meal at a time.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                 featuresData?.slice(0,6).map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)  
                }

            </div>
            <div className="space-y-3 text-center mt-10 mb-2 bg">
			<Link to="/availableFoods"><button className="btn btn-outline bg-emerald-900 text-white">Show All </button></Link>
		</div>
        </div>
    );
};

export default FeaturedFood;