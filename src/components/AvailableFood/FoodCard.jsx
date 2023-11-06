/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FoodCard = ({food}) => {
      const{
        _id,
        foodName,
		foodImage,
		foodQuantity,
		pickupLocation,
		expiredDate,
		additionalNotes,
		foodStatus,
		donatorImage,
		donatorName,
		donatorEmail} =food || {}
    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src={donatorImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leadi">{donatorName}</h2>
				
			</div>
		</div>
	<div>
    <h1 className="text-xs font-medium">Expire: {expiredDate}</h1>
    <p className="text-xs font-medium">Quantity: {foodQuantity}</p>
    </div>
        

	</div>
	<img src={foodImage} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3">
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-3">
				<h1>{foodName}</h1>
				
			</div>
            
			<button type="button" title="Bookmark post" className="flex bg-orange-400 p-1 rounded-lg font-bold items-center justify-center">
				{foodStatus}
			</button>
		</div>
        <div>{additionalNotes}</div>
		<div className="flex flex-wrap items-center pt-3 pb-1">
			<div className="flex items-center space-x-2">
				<div className="flex -space-x-1">
					
				</div>
				
			</div>
		</div>
		<div className="space-y-3 text-center">
			<Link to={`/food/${_id}`}><button className="btn btn-outline">View Details Button</button></Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default FoodCard;