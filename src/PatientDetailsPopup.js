import React, { useState, useEffect } from 'react';
import './PatientDetailsPopup.css'; // Import CSS for styling

const PatientDetailsPopup = ({ onClose, onSave, patient }) => {
  const [patientData, setPatientData] = useState({
    name: '',
    tokenNumber: '',
    phone: '',
    email: '',
    age: '',
    bloodGroup: ''
  });

  useEffect(() => {
    if (patient) {
      setPatientData(patient); // Populate form with patient data for editing
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(patientData); // Pass data back to App.js for saving
    onClose(); // Close the popup
  };

  return (
    <div className="popup">
      <h3 className='patient'>Patient Details</h3>
      <form onSubmit={handleSubmit} className="patient-details-form">
        <div className="form-row">
          <div className="form-column">
            <label>
              Patient Name:
              <input 
                type="text" 
                name="name" 
                value={patientData.name} 
                onChange={handleChange} 
                required 
              />
            </label>
            <label>
              Token Number:
              <input 
                type="text" 
                name="tokenNumber" 
                value={patientData.tokenNumber} 
                onChange={handleChange} 
                required 
              />
            </label>
            <label>
              Phone:
              <input 
                type="text" 
                name="phone" 
                value={patientData.phone} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>
          <div className="form-column">
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={patientData.email} 
                onChange={handleChange} 
                required 
              />
            </label>
            <label>
              Age:
              <input 
                type="text" 
                name="age" 
                value={patientData.age} 
                onChange={handleChange} 
                required 
              />
            </label>
            <label>
              Blood Group:
              <input 
                type="text" 
                name="bloodGroup" 
                value={patientData.bloodGroup} 
                onChange={handleChange} 
                required 
              />
            </label>
          </div>
        </div>
        <button type="submit" className="save-button">Save</button> <br />
        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default PatientDetailsPopup;
