import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";

const AvailableFood = () => {
   const[availableFood , setAvailableFood] =useState([])

   useEffect(()=>{
	axios.get("http://localhost:5000/getFood")
	.then(res =>setAvailableFood(res.data))
   },[])
//   console.log(availableFood);

     
    return (
        <div>
        <h1 className="text-3xl text-center font-bold mb-5">Available Food</h1>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			{
				availableFood.map(food =><FoodCard key={food._id} food={food}></FoodCard>)
			}
		</div>
        </div>
    );
};

export default AvailableFood;