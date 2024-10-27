import React, { useState } from "react";
import Report from "./components/Report";
import Receipt from "./components/Receipt"; 
import GuestForm from "./components/GuestForm";
import ServicesPopup from "./components/ServicesPopup";

const App = () => {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [showServicesPopup, setShowServicesPopup] = useState(false);

  const handleAddGuest = (guest) => {
    setGuests([...guests, guest]);
  };

  const handleCheckOut = (guestId) => {
    const updatedGuests = guests.map(guest =>
      guest.id === guestId ? { ...guest, checkedOut: true } : guest
    );
    setGuests(updatedGuests);
  };

  const handleSelectGuest = (guest) => {
    setSelectedGuest(guest);
    setShowServicesPopup(true);
  };

  return (
    <div>
      <h1>Hotel Room Booking System</h1>
      <GuestForm onAddGuest={handleAddGuest} />

      <button onClick={() => handleSelectGuest(guests[0])}>Select Guest</button> {/* Example button to trigger popup */}

      {showServicesPopup && selectedGuest && (
        <ServicesPopup
          guest={selectedGuest}
          onClose={() => setShowServicesPopup(false)}
        />
      )}

      <Receipt guests={guests} />
      <Report guests={guests} />
    </div>
  );
};

export default App;




