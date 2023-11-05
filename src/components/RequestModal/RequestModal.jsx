import React from 'react';
const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState(null);
  const [isRequestModalOpen, setRequestModalOpen] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [donationMoney, setDonationMoney] = useState('');

  const openRequestModal = () => {
    setRequestModalOpen(true);
  };

  const closeRequestModal = () => {
    setRequestModalOpen(false);
  };

  const handleRequestSubmit = () => {
    // Create a request object with the form data
    const request = {
      foodId: foodDetails.id,
      donatorEmail: foodDetails.donatorEmail,
      // ...other request data
    };

    // Call the API or perform the necessary action to submit the request
    // Reset form fields
    setAdditionalNotes('');
    setDonationMoney('');

    closeRequestModal();
  };

  if (!foodDetails) {
    // You can display a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Donor Information:</h2>
      <p>Donor Name: {foodDetails.donorName}</p>
      <p>Food Pickup Location: {foodDetails.pickupLocation}</p>

      <h2>Single Food Section:</h2>
      <img src={foodDetails.foodImage} alt={foodDetails.foodName} />
      <p>Food Name: {foodDetails.foodName}</p>
      <p>Food Quantity: {foodDetails.foodQuantity}</p>
      <p>Expired Date/Time: {foodDetails.expiredDateTime}</p>

      <button onClick={openRequestModal}>Request</button>

      <Modal
        isOpen={isRequestModalOpen}
        onRequestClose={closeRequestModal}
      >
        <h2>Request Food</h2>
        <p>Food Name: {foodDetails.foodName}</p>
        <p>Food Image: <img src={foodDetails.foodImage} alt={foodDetails.foodName} /></p>
        {/* ...other food details */}
        <p>User Email: {/* Get the logged-in user's email */}</p>
        <p>Request Date: {new Date().toLocaleString()}</p>

        <div>
          <label>Additional Notes:</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>
        <div>
          <label>Donation Money:</label>
          <input
            type="number"
            value={donationMoney}
            onChange={(e) => setDonationMoney(e.target.value)}
          />
        </div>

        <button onClick={handleRequestSubmit}>Request</button>
        <button onClick={closeRequestModal}>Cancel</button>
      </Modal>
    </div>
const RequestModal = () => {
    return (
        <div>
            <Modal
        isOpen={isRequestModalOpen}
        onRequestClose={closeRequestModal}
      >
        <h2>Request Food</h2>
        <p>Food Name: {foodDetails.foodName}</p>
        <p>Food Image: <img src={foodDetails.foodImage} alt={foodDetails.foodName} /></p>
        {/* ...other food details */}
        <p>User Email: {/* Get the logged-in user's email */}</p>
        <p>Request Date: {new Date().toLocaleString()}</p>

        <div>
          <label>Additional Notes:</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>
        <div>
          <label>Donation Money:</label>
          <input
            type="number"
            value={donationMoney}
            onChange={(e) => setDonationMoney(e.target.value)}
          />
        </div>

        <button onClick={handleRequestSubmit}>Request</button>
        <button onClick={closeRequestModal}>Cancel</button>
      </Modal>
    </div>
    );
};

export default RequestModal;