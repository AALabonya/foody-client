import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext)

  // Initialize state variables for form fields
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodQuantity, setFoodQuantity] = useState();
  const [pickupLocation, setPickupLocation] = useState('');
  const [expiredDate, setExpiredDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [foodStatus, setFoodStatus] = useState('available');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Access form values from state variables
    const foodData = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      foodStatus,
      donatorImage: user.photoURL || '',
      donatorName: user.displayName || '',
      donatorEmail: user.email || '',
    };

    console.log('Form Data:', foodData);
    // You can send this data to your backend or perform other actions.
    axios.post("http://localhost:5000/foodAdd", foodData)
    .then(res=>console.log(res.data))
  };

  return (
    <div className="bg-gray-200 p-12">
      <div className="bg-white rounded-md shadow-lg max-w-xl mx-auto p-3 md:p-20 lg:p-20">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Food</h2>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">
              Food Name:
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">
              Food Image:
            </label>
            <input
              type="text"
              id="foodImage"
              name="foodImage"
              value={foodImage}
              onChange={(e) => setFoodImage(e.target.value)}
              required
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="foodQuantity" className="block text-sm font-medium text-gray-700">
              Food Quantity:
            </label>
            <input
              type="number"
              id="foodQuantity"
              name="foodQuantity"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
              Pickup Location:
            </label>
            <input
              type="text"
              id="pickupLocation"
              name="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="expiredDate" className="block text-sm font-medium text-gray-700">
              Expired Date:
            </label>
            <input 
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
              type="date"
              id="expiredDate"
              name="expiredDate"
              value={expiredDate}
              onChange={(e) => setExpiredDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
              Additional Notes:
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
              rows="2"
            ></textarea>
          </div>

          <div className="mb-2">
            <label htmlFor="foodStatus" className="block text-sm font-medium text-gray-700">
              Food Status:
            </label>
            <select
              id="foodStatus"
              name="foodStatus"
              value={foodStatus}
              onChange={(e) => setFoodStatus(e.target.value)}
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full hover-bg-blue-700 transition-all duration-300"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
