
import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateTheFood = () => {

  const loaderData = useLoaderData()

  console.log(loaderData);

  const axios = useAxios()

  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
  } = loaderData || {}
  console.log(loaderData);

  const handleUpdateFood = (e) => {
    e.preventDefault()
    const form = e.target;
    const updateForm = {
      foodName: form.foodName?.value,
      foodImage: form.foodImage?.value,
      pickupLocation: form.pickupLocation?.value,
      expiredDate: form.expiredDate?.value,
      additionalNotes: form.additionalNotes?.value,
      foodQuantity: form.foodQuantity?.value

    }
    console.log(updateForm);
    axios.patch(`/updateFood/${_id}`, updateForm)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your food has been Updated.", "success")
        }
      })

  }

  return (
    <div className="bg-base-200 p-3">
      <Helmet><title>Foody | Update Food</title></Helmet>
      <form onSubmit={handleUpdateFood} className="max-w-2xl mx-auto">
        <h1 className="text-center font-bold text-2xl">Food for Request</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <label className="input-group">
            <input type="text" name="foodName" defaultValue={foodName} placeholder="Name" className="w-full input input-bordered" />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Image</span>
          </label>
          <label className="input-group">
            <input type="text" name="foodImage"
              defaultValue={foodImage} placeholder="Name" className="w-full input input-bordered" />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup Location</span>
          </label>
          <label className="input-group">
            <input type="text" name="pickupLocation" defaultValue={pickupLocation} className="w-full input input-bordered" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Expire Date</span>
          </label>
          <label className="input-group">
            <input name="expiredDate"
              defaultValue={expiredDate} className="w-full input input-bordered" />
          </label>
        </div>

        <div className=" mb-1">

          <label htmlFor="foodQuantity" className="block text-sm font-medium text-gray-700">
            Food Quantity:
          </label>
          <input
            type="number"
            id="foodQuantity"
            name="foodQuantity"
            defaultValue={foodQuantity}
            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />

        </div>
        <div className=" mb-1">
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
            Additional Notes:
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            defaultValue={additionalNotes}

            className="mt-1 p-2 rounded-md border w-full focus:outline-none focus:ring focus:border-blue-300"
            rows="2"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full hover-bg-blue-700 transition-all duration-300 mb-5">
          Update Food
        </button>

      </form>
    </div>
  );
};

export default UpdateTheFood;