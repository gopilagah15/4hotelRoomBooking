import React, { useState } from "react";

const ServicesPopup = ({ guest, onClose }) => {
  const [services, setServices] = useState({ spa: false, roomService: false });

  const handleToggleService = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };

  const handleSubmit = () => {
    const selectedServices = Object.keys(services).filter(service => services[service]);
    guest.services = selectedServices;
    onClose();
    console.log(Object.keys(services).filter(service => services[service]))
  };

  return (
    <div className="popup">
      <h2>Extra Services for {guest.name}</h2>
      <label>
        <input type="checkbox" checked={services.spa} onChange={() => handleToggleService("spa")} />
        Spa
      </label>
      <label>
        <input type="checkbox" checked={services.roomService} onChange={() => handleToggleService("roomService")} />
        Room Service
      </label>
      <button onClick={handleSubmit}>Save Services</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ServicesPopup;
