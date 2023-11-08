import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";


const MyFoodRequest = () => {
    const{user} = useContext(AuthContext)
    const axios =useAxios()
    const [myRequest, setMyRequest]=useState([])
    useEffect(()=>{
        axios.get(`/getUserRequestFood?email=${user?.email}`)
        .then(res=>setMyRequest(res.data))
    },[axios,user?.email ])


    const handleCancel=(id)=>{
        Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result)=>{
            if(result.isConfirmed){
                axios.delete(`/requestCancel/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        const filterData =myRequest.filter(request=> request._id == id)
                        setMyRequest(filterData)
                        Swal.fire({
                            title: "Delivered!",
                            text: "Your file has been update.",
                            icon: "success"
                        })
                    }
                })
            }
        })
    }
    return (
        <div>
           <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
				<h2 className=" text-2xl font-semibold leadi text-center mb-10"> My Food Food Request</h2>
				{
					myRequest.length === 0 && <p>You do not add any food</p>
				}
				{
					myRequest.length > 0 && <div className="overflow-x-auto">
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
									<th className="p-3">Food Image</th>
									<th className="p-3">Food Name</th>
									<th className="p-3">Donar Name</th>
									<th className="p-3">Expire Date</th>
									<th className="p-4">PickUp Location</th>
                                    <th className="p-3">Request date</th>
									<th className="p-3">Donation Money</th>
									<th className="p-4">Status</th>
                                    <th className="p-4">Action</th>
								</tr>
							</thead>
							<tbody>
								{
									myRequest.map(request => <tr key={request._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
										<td className="p-3">
                                        <img src={request.foodImage} alt="" className="w-20 rounded-md" />
										</td>
										<td className="p-3">
											
                                            <p>{request.foodName}</p>
										</td>
										<td className="p-3">
											<p>{request.donatorName}</p>

										</td>
										<td className="p-3">
											<p>{request.expiredDate}</p>

										</td>
                                        <td className="p-3">
											
                                            <p>{request.pickupLocation}</p>
										</td>
										<td className="p-3">
											<p>{request.requestDate}</p>

										</td>
										<td className="p-3">
											<p>{request.donationMoney}</p>

										</td>
                                        <td className="p-3">
											{request.isDelivered ?<button className="text-green-600 font-bold mr-3">Available</button>
                                            :
                                            <button className="text-red-600 font-bold">Delivered</button>
                                            

                                            }

										</td>
										<td className="p-3">
											{
												myRequest.isDelivered ?
													<button className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Cancel</button>
													:
													<button onClick={() => handleCancel(request._id)} className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
														cancel
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

export default MyFoodRequest;