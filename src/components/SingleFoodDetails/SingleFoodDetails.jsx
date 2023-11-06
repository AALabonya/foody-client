/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
  const singleData = useLoaderData()
  // console.log(singleData);
  const [remainingTime, setRemainingTime] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [donationMoney, setDonationMoney] = useState('');
  // const {
  //   _id,
  //   foodName,
  //   foodImage,
  //   foodQuantity,
  //   pickupLocation,
  //   expiredDate,
  //   additionalNotes,
  //   foodStatus,
  //   donatorImage,
  //   donatorName,
  //   donatorEmail } = singleData || {}

  //calculation 
  // const currentDate =new Date()
  // const expiredDateValue = singleData.expiredDate.split("_")
  // const expiredDateField = new Date(
  //   parseInt(expiredDateValue[0]),
  //   parseInt(expiredDateValue[1]) -1,
  //   parseInt(expiredDateValue[2])
  // )

  // const totalTime = expiredDateField - currentDate

  //  if(totalTime > 0){
  //   const days = Math.floor(totalTime/(1000*60*60*24))
  //   const hours = Math.floor((totalTime%(1000*60*60*24))/(1000*60*60))
  //   const minutes = Math.floor((totalTime%(1000*60*60))/(1000*60))
  //    setRemainingTime(`${days} days, ${hours}hours,${minutes} minutes.` )
  // }else{
  //   setRemainingTime("Expired")
  // }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data and submit it as needed
    const requestData = {
      additionalNotes,
      donationMoney,
      // You can add other non-editable fields here
    };

    // Perform your submission logic (e.g., send data to a server, update state, etc.)
    // Example: send the requestData to an API endpoint or save it to a database
  };

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 mt-14 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
            <div className="flex space-x-2 sm:space-x-4">
              <h1 className="font-bold">FoodName: {singleData.foodName}</h1>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <h1 className="font-bold">Food Quantity: {singleData.foodQuantity}</h1>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <h1 className="font-bold">ExpiredDate: {singleData.expiredDate}</h1>
            </div>
            {/* The button to open modal */}
<label htmlFor="my_modal_7" className="btn">Request for Food</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form  action="" className="container flex flex-col mx-auto space-y-12">
    <h1 className="text-center font-bold text-2xl">Food Request</h1>
		<fieldset className="">
    <form >
                        <div className="md:flex gap-10 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={singleData.foodName}  placeholder="Name" className="w-full input input-bordered" />
                                </label>
                                <span className="label-text mt-4">Food Id :</span>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={singleData._id}  placeholder="Name" className="w-full input input-bordered" />
                                </label>
                            </div>

                       <div className="form-control md:w-1/2">
       <img src={singleData.foodImage} alt="" className="h-72 rounded-md" />
                            </div>
                        </div>

                        <div className="md:flex gap-10 mb-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Food Donator Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="rating"  step="0.1" className="w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Food Donator Email</span>
                                </label>
                                <label className="input-group">
                                    <input name="type"  required className="w-full input input-bordered" />
                                </label>
                            </div>

                        </div>
                        <div className="md:flex gap-10 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="rating"  step="0.1" className="w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Expire Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price"  className="w-full input input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-10 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Request Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" name="rating"  step="0.1" className="w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Donation Money</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price"  className="w-full input input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-2">
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
              Additional Notes:
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
            
              
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
              rows="2"
            ></textarea>
          </div>
                        <input type="submit" value="Request Button" className="btn btn-block" />

                    </form>
		</fieldset>
	
	</form>
</section>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>

          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img src={singleData.foodImage} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default SingleFoodDetails;