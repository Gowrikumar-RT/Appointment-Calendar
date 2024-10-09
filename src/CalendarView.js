import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PatientDetailsPopup from './PatientDetailsPopup';
import './CalendarView.css'; // Import CSS for styling

const CalendarView = ({ onSavePatient }) => {
  const [date, setDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowPopup(true); // Show popup to fill patient details after selecting a date
  };

  const handleSave = (patientData) => {
    const patientWithDate = { ...patientData, date: date.toISOString().split('T')[0] };
    onSavePatient(patientWithDate);
    setShowPopup(false); // Close popup after saving
  };

  const handleEdit = (patient) => {
    setCurrentPatient(patient);
    setEditMode(true);
    setShowPopup(true);
  };

  return (
    <div className="calendar-view">
      <h2>Select a Date to Add Patient Details</h2>
      <Calendar onChange={handleDateChange} value={date} />
      {showPopup && (
        <PatientDetailsPopup 
          onClose={() => {
            setShowPopup(false);
            setEditMode(false);
            setCurrentPatient(null);
          }} 
          onSave={handleSave} 
          patient={editMode ? currentPatient : null} // Pass patient data if in edit mode
        />
      )}
    </div>
  );
};

export default CalendarView;
