/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import FoodCard from "./FoodCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../pages/Loading";
import useAxios from "../../hooks/useAxios";


const AvailableFood = () => {

	const [date, setDate] = useState('')
	const [search, setSearch] = useState('')
	const [check, setCheck] = useState('')

	const axios = useAxios()

	const getFoods = async () => {
		const res = await axios.get(`/getFood?sortField=expiredDate&sortOrder=${date}&foodName=${check}`)
		return res
	}
	console.log(getFoods);

	const { data: food, isLoading, isError } = useQuery({
		queryKey: ["foods", date, check],
		queryFn: getFoods,
	})

	console.log(food?.data);

	if (isLoading) {
		return <Loading></Loading>
	}



	return (
		<div><div className="w-full dark:bg-gray-500 bg-[url('https://i.ibb.co/hML1zzk/fresh-vegetable-salad-with-grilled-chicken-breast-tomatoes-cucumbers-radish-mix-lettuce-leaves-chick.jpg')]">
			<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
				<h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100">Get Our Updates</h1>
				<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
			</div>
		</div>
			<h1 className="text-3xl text-center font-bold mt-5">Available Food</h1>
			<h3 className="text-xl text-center font-bold mb-5">Sharing love, one meal at a time.</h3>
			<div className="md:flex w-full justify-between">
				<div className="items-center flex justify-center md:w-1/2">
					<div>
						<input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search here..."
							className="border" />
						<button
							type="button"
							onClick={() => setCheck(search)} className=" bg-teal-300">Search</button>
					</div>
				</div>
				<div>
					<select
						className="input my-2"
						onChange={(e) => setDate(e.target.value)}
					>
						<option value="" className="disabled">
							choose one</option>
						<option value="asc">ascending date</option>
						<option value="desc">descending date</option>
					</select>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{
					food?.data.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
				}
			</div>
		</div>
	);
};

export default AvailableFood;