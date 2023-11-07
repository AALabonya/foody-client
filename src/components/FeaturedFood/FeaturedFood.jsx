// import { useQuery } from "@tanstack/react-query";
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
    // const featureFood = async()=>{
    //     const res= await axios.get("/featuredFood")
    //     return res
    // }
    //   const {data: foods, isLoading,isError} = useQuery({
    //     queryKey:[ "foods" ],
    //     queryFn: featureFood
    //   })

    //   console.log(foods?.data);
 console.log(featuresData);
      
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 ">Featured Foods</h1>
            <h3 className="text-center font-bold text-2xl mb-5">Sharing love, one meal at a time.</h3>
            <div className="grid md:grid-cols-3 gap-4">
                {
                 featuresData?.slice(0,6).map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)  
                }

            </div>
            <div className="space-y-3 text-center">
			<Link to="/availableFoods"><button className="btn btn-outline">Show All </button></Link>
		</div>
        </div>
    );
};

export default FeaturedFood;