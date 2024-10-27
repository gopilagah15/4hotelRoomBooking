import React, { useState } from "react";

const GuestForm = ({ onAddGuest }) => {
  const [name, setName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && checkInDate && checkOutDate) {
      const newGuest = {
        id: Date.now(),
        name,
        checkInDate,
        checkOutDate,
        services: [],
        checkedOut: false,
      };
      onAddGuest(newGuest);
      setName("");
      setCheckInDate("");
      setCheckOutDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      <button type="submit">Register Guest</button>
    </form>
  );
};

export default GuestForm;
