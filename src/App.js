import React, { useState } from 'react';
import Navbar from './Navbar';
import CalendarView from './CalendarView';
import ReportsView from './ReportsView';
import PatientDetailsPopup from './PatientDetailsPopup';
import './App.css'; // Import CSS for styling

const App = () => {
  const [currentView, setCurrentView] = useState('calendar'); // Default view
  const [patients, setPatients] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleSavePatient = (patientData) => {
    setPatients((prevPatients) => [...prevPatients, patientData]);
  };

  const handleEditPatient = (patient) => {
    setEditingPatient(patient);
    setShowPopup(true);
  };

  const handleDeletePatient = (index) => {
    setPatients((prevPatients) => prevPatients.filter((_, i) => i !== index));
  };

  const handleUpdatePatient = (updatedPatient) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.tokenNumber === updatedPatient.tokenNumber ? updatedPatient : patient
      )
    );
    setShowPopup(false);
    setEditingPatient(null);
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigate} />
      <div className="content">
        {currentView === 'calendar' && (
          <CalendarView onSavePatient={handleSavePatient} />
        )}
        {currentView === 'reports' && (
          <ReportsView
            patients={patients}
            onEditPatient={handleEditPatient}
            onDeletePatient={handleDeletePatient}
          />
        )}
        {showPopup && (
          <PatientDetailsPopup
            onClose={() => setShowPopup(false)}
            onSave={handleUpdatePatient}
            patient={editingPatient}
          />
        )}
      </div>
    </div>
  );
};

export default App;
