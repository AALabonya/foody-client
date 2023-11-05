import { Link } from "react-router-dom";

const AvailableFood = () => {
    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leadi">leroy_jenkins72</h2>
				
			</div>
		</div>
		<h1>Expired Date:</h1>
	</div>
	<img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
	<div className="p-3">
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-3">
				<h1>FoodName:</h1>
				
			</div>
            
			<button type="button" title="Bookmark post" className="flex items-center justify-center">
				status
			</button>
		</div>
        <div>AdditionalNotes</div>
		<div className="flex flex-wrap items-center pt-3 pb-1">
			<div className="flex items-center space-x-2">
				<div className="flex -space-x-1">
					
				</div>
				
			</div>
		</div>
		<div className="space-y-3 text-center">
			<Link to="/food/:id"><button className="btn">View Details Button</button></Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default AvailableFood;