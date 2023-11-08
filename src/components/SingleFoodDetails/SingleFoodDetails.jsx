/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const SingleFoodDetails = () => {
  const singleData = useLoaderData()
  const { user } = useContext(AuthContext)

  const email = user?.email



  const [foodName, setFoodName] = useState(singleData.foodName);
  const [foodImage, setFoodImage] = useState(singleData.foodImage);
  const [requestFoodId, setRequestFoodId] = useState(singleData._id)
  const [pickupLocation, setPickupLocation] = useState(singleData.pickupLocation);
  const [donatorName, setDonatorName] = useState(singleData.donatorName);
  const [donatorEmail, setDonatorEmail] = useState(singleData.donatorEmail);
  const [expiredDate, setExpiredDate] = useState(singleData.expiredDate);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [donationMoney, setDonationMoney] = useState('');
  const [requestDate] = useState(new Date().toLocaleString());
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

  // calculation 
  // const currentDate =new Date()
  // const expiredDateValue = singleData.expiredDate.split("-")
  // const expiredDateField = new Date(
  //   parseInt(expiredDateValue[0]),
  //   parseInt(expiredDateValue[1]) -1,
  //   parseInt(expiredDateValue[2])
  // )

  // const totalTime = expiredDateField - currentDate

  //  if(totalTime > 0){
  //   const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((totalTime % (1000*60*60*24))/(1000*60*60))
  //   const minutes = Math.floor((totalTime % (1000*60*60))/(1000*60))
  //    setRemainingTime(`${days} days, ${hours}hours,${minutes} minutes.` )
  // }else{
  //   setRemainingTime("Expired")
  // }
  const handleFoodSubmit = (e) => {
    e.preventDefault();

    const newForm = {
      foodName, foodImage,requestFoodId, pickupLocation, expiredDate, donatorName, donatorEmail, UserEmail: user?.email, RequesterName: user?.displayName, RequesterImage: user?.photoURL, additionalNotes, donationMoney, requestDate
    }
       console.log(newForm);
     axios.post("http://localhost:5000/requestFood", newForm)
    .then(res=>console.log(res.data))

  };

  return (
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <h1 className="text-center font-bold text-4xl mt-12 mb-5">Donar Name: {singleData.donatorName}</h1>
           <h3 className="text-center font-bold text-2xl">Food Pickup Location :- {singleData.pickupLocation}</h3>
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
            <label htmlFor="my_modal_7" className="btn ">Request for Food</label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <form onSubmit={handleFoodSubmit} method="dialog">
                <h1 className="text-center font-bold text-2xl">Food for Request</h1>
                  <div className="md:flex gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Food Name</span>
                      </label>
                      <label className="input-group">
                        <input type="text" onChange={(e) => setFoodName(e.target.value)} value={foodName} placeholder="Name" className="w-full input input-bordered" />
                      </label>
                      <span className="label-text mt-4">Request Food Id :</span>
                      <label className="input-group">
                        <input type="text" name="_id" readOnly onChange={(e) => setRequestFoodId(e.target.value)} value={requestFoodId} placeholder="Name" className="w-full input input-bordered" />
                      </label>
                    </div>

                    <div className="form-control md:w-1/2">
                      <img name="foodImage" src={foodImage} alt="" className="h-72 rounded-md" />
                    </div>
                  </div>

                  <div className="md:flex gap-10 mb-1">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Food Donator Name</span>
                      </label>
                      <label className="input-group">
                        <input type="text" name="foodName" onChange={e => setDonatorName(e.target.value)} readOnly value={donatorName} className="w-full input input-bordered" />
                      </label>
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Food Donator Email</span>
                      </label>
                      <label className="input-group">
                        <input name="text" onChange={e => setDonatorEmail(e.target.value)} readOnly value={donatorEmail} className="w-full input input-bordered" />
                      </label>
                    </div>

                  </div>
                  <div className="md:flex gap-10 mb-1">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">User Email</span>
                      </label>
                      <label className="input-group">
                        <input readOnly type="text" name="email" defaultValue={user?.email} className="w-full input input-bordered" />
                      </label>
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Request Date</span>
                      </label>
                      <label className="input-group">
                        <input type="text" value={requestDate} readOnly className="w-full input input-bordered" />
                      </label>
                    </div>
                  </div>
                  <div className="md:flex gap-10 mb-1">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Pickup Location</span>
                      </label>
                      <label className="input-group">
                        <input type="text" onChange={e => setPickupLocation(e.target.value)} readOnly value={pickupLocation} className="w-full input input-bordered" />
                      </label>
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Expire Date</span>
                      </label>
                      <label className="input-group">
                        <input onChange={e => setExpiredDate(e.target.value)} readOnly value={expiredDate} className="w-full input input-bordered" />
                      </label>
                    </div>
                  </div>
                  <div className=" mb-1">

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Donation Money</span>
                      </label>
                      <label className="input-group">
                        <input type="number" name="donationMoney" onChange={(e) => setDonationMoney(e.target.value)} required className="w-full input input-bordered" />
                      </label>
                    </div>
                  </div>
                  <div className="mb-1">
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
                      Additional Notes:
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
                      rows="2"
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full hover-bg-blue-700 transition-all duration-300">
                    Request
                  </button>

                </form>
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
  
  );
};

export default SingleFoodDetails;