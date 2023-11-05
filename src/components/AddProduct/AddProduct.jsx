import useAuth from "../../hooks/useAuth";

const AddProduct = () => {
 const {user }= useAuth()

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = {
          foodName: event.target.foodName.value,
          foodImage: event.target.foodImage.value,
          foodQuantity: event.target.foodQuantity.value,
          pickupLocation: event.target.pickupLocation.value,
          expiredDate: event.target.expiredDate.value,
          expiredTime: event.target.expiredTime.value,
          additionalNotes: event.target.additionalNotes.value,
          foodStatus: event.target.foodStatus.value,
            donatorImage: user.photoURL || "",
            donatorName: user.displayName || "",
            donatorEmail: user.email || "",
        };
    
        console.log('Form Data:', formData);
        // You can send this data to your backend or perform other actions.
      };

  return (
    <div className="bg-gray-200 p-4">
    <div className="bg-white rounded-md shadow-lg max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">
            Food Name:
          </label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">
            Food Image:
          </label>
          <input
            type="text" 
            id="foodImage"
            name="foodImage"
            required
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="foodQuantity" className="block text-sm font-medium text-gray-700">
            Food Quantity:
          </label>
          <input
            type="number"
            id="foodQuantity"
            name="foodQuantity"
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
            Pickup Location:
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expiredDateTime" className="block text-sm font-medium text-gray-700">
            Expired Date/Time:
          </label>
          <input
            type="date"
            id="expiredDate"
            name="expiredDate"
            required
          />
        </div>
        <div className="mb-4">
            <label htmlFor="expiredTime" className="block text-sm font-medium text-gray-700">
              Expired Time:
            </label>
            <input
              type="time"
              id="expiredTime"
              name="expiredTime"
              className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            
              required
            />
          </div>
        <div className="mb-4">
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
            Additional Notes:
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="foodStatus" className="block text-sm font-medium text-gray-700">
            Food Status:
          </label>
          <select
            id="foodStatus"
            name="foodStatus"
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="donatorImage" className="block text-sm font-medium text-gray-700">
            Donator Image:
          </label>
          <input
            type="text"
            id="donatorImage"
           defaultValue={user.photoURL}
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="donatorName" className="block text-sm font-medium text-gray-700">
            Donator Name:
          </label>
          <input
            type="text"
            id="donatorName"
            defaultValue={user.displayName}
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="donatorEmail" className="block text-sm font-medium text-gray-700">
            Donator Email:
          </label>
          <input
            type="email"
            id="donatorEmail"
            defaultValue={user.email}
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div> */}

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
}
export default AddProduct;
