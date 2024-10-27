import React from "react";

const Report = ({ guests }) => {
  // Define the calculateTotal function
  const calculateTotal = (guest) => {
    const roomCharge = 100; // Example charge per night
    const serviceCharges = {
      spa: 50,
      roomService: 30,
    };

    // Calculate days stayed
    const daysStayed = Math.max(
      (new Date(guest.checkOutDate) - new Date(guest.checkInDate)) / (1000 * 60 * 60 * 24),
      1
    );

    const roomTotal = roomCharge * daysStayed;
    const serviceTotal = guest.services.reduce((total, service) => total + (serviceCharges[service] || 0), 0);

    console.log(`Calculating total for ${guest.checkInDate} to ${guest.checkOutDate}: Room Total = $${roomTotal}, Service Total = $${serviceTotal}`);
    
    return roomTotal + serviceTotal;
  };

  // Calculate daily revenue by summing each checked-out guest's total
  const dailyRevenue = guests.reduce((total, guest) => {
    if (guest.checkedOut) {
      const guestTotal = calculateTotal(guest);
      console.log(`Adding ${guestTotal} for guest ${guest.checkInDate} to ${guest.checkOutDate}`);
      return total + guestTotal;
    }
    return total;
  }, 0);

  const occupancy = guests.length;

  return (
    <div>
      <h2>Daily Report</h2>
      <p>Total Revenue: ${dailyRevenue}</p>
      <p>Total Occupancy: {occupancy}</p>
    </div>
  );
};

export default Report;
