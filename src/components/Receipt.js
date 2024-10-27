import React from "react";

const Receipt = ({ guests }) => {
  const calculateTotal = (guest) => {
    const roomCharge = 100; // Example room charge per night
    const serviceCharges = {
      spa: 50,
      roomService: 30,
    };
    const daysStayed = Math.max(
      (new Date(guest.checkOutDate) - new Date(guest.checkInDate)) / (1000 * 60 * 60 * 24), 
      1
    );
    const roomTotal = roomCharge * daysStayed;
    const serviceTotal = guest.services.reduce((total, service) => total + serviceCharges[service], 0);
    return roomTotal + serviceTotal;
  };

  return (
    <div>
      <h2>Receipts</h2>
      {guests.map(guest => (
        <div key={guest.id}>
          <p>{guest.name}</p>
          <p>Total Bill: ${calculateTotal(guest)}</p>
        </div>
      ))}
    </div>
  );
};

export default Receipt;
