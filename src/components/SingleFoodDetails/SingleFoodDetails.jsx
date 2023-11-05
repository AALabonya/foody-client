import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from 'react-modal';

const SingleFoodDetails = () => {
    const { id } = useParams();
    const [isModalOpen, setModalOpen] = useState(false);
    const [donationMoney, setDonationMoney] = useState('');
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleDonation = () => {
      // Perform the donation action and save the data to your database (food request collection).
      console.log('Donation Money:', donationMoney);
      // Close the modal after processing the request
      closeModal();
    };
  
  return (
    <div>
    <h2>Single Food Details for ID: {id}</h2>
    {/* Display donor information, food details, and a "Request" button */}
    <div>
      <p>Donor Information:</p>
      {/* Display donor name and food pickup location */}
    </div>
    <div>
      <p>Single Food Section:</p>
      {/* Display food image, name, quantity, expired date/time */}
      <button onClick={openModal}>Request</button>
    </div>

    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Request Modal"
    >
      <h2>Request Food</h2>
      <p>Food Name: {/* Display food name */}</p>
      <p>Food Image: {/* Display food image */}</p>
      <p>Food ID: {id}</p>
      <p>Food Donator Email: {/* Display donor's email */}</p>
      <p>User Email: {/* Display logged-in user's email */}</p>
      <p>Request Date: {new Date().toLocaleString()}</p>
      <p>Pickup Location: {/* Display food pickup location */}</p>
      <p>Expire Date: {/* Display expired date */}</p>
      <textarea
        placeholder="Additional Notes"
        value={donationMoney}
        onChange={(e) => setDonationMoney(e.target.value)}
      />
      <button onClick={handleDonation}>Request</button>
      <button onClick={closeModal}>Cancel</button>
    </Modal>
  </div>
    );
};

export default SingleFoodDetails;