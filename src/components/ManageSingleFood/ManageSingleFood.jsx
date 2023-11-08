
import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageSingleFood = () => {
	const manageSingleFood = useLoaderData()
	
	const [singleData, setSingleData] = useState(manageSingleFood)
	const axios = useAxios()
	

	const handlePending = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				const delivered = { isDelivered: true }
				axios.patch(`/requestFoodDelivered/${id}`, delivered)
					.then(res => {
						console.log(res.data);
						if (res.data.modifiedCount > 0) {
							const findOne = singleData.find(single => single._id == id)
							const filterId = singleData.filter(single => single._id !== id)
							findOne.isDelivered = true
							const updateOne = [findOne, filterId]
							setSingleData(updateOne)
							Swal.fire({
								title: "Delivered!",
								text: "Your file has been update.",
								icon: "success"
							});
						}
					})

					.catch(error => console.log(error))
			}
		})
	}


	return (
		<div>
			<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
				<h2 className=" text-2xl font-semibold leadi text-center mb-10"> Manage Single Food</h2>
				{
					manageSingleFood.length === 0 && <p>can not request for food</p>
				}
				{
					manageSingleFood.length > 0 && <div className="overflow-x-auto">
						<table className="min-w-full text-xs">
							<colgroup>
								<col />
								<col />
								<col />
								<col />
								<col />
								<col className="w-24" />
							</colgroup>
							<thead className="dark:bg-gray-700">
								<tr className="text-left">
									<th className="p-3">Requester Name</th>
									<th className="p-3">Requester Image</th>
									<th className="p-3">Requester Email</th>
									<th className="p-3">Request Time and Date</th>
									<th className="p-4">Status</th>
								</tr>
							</thead>
							<tbody>
								{
									manageSingleFood.map(single => <tr key={single._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
										<td className="p-3">
											<p>{single.RequesterName}</p>
										</td>
										<td className="p-3">
											<img src={single.RequesterImage} alt="" className="w-20 rounded-md" />

										</td>
										<td className="p-3">
											<p>{single.UserEmail}</p>

										</td>
										<td className="p-3">
											<p>{single.requestDate}</p>

										</td>
										<td className="p-3">
											{
												single.isDelivered ?
													<button className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Delivered</button>
													:
													<button onClick={() => handlePending(single._id)} className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
														Pending
													</button>
											}
										</td>
									</tr>
									)
								}


							</tbody>
						</table>
					</div>
				}

			</div>
		</div>

	);
};

export default ManageSingleFood;