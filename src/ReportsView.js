import React from 'react';
import './ReportsView.css'; // Optional: Import your CSS for styling

const ReportsView = ({ patients, onEditPatient, onDeletePatient }) => {
  return (
    <div>
      {patients.length === 0 ? (
        <p>No patients list. Click a Calendar to add patients.</p>
      ) : (
        <table className="reports-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Token No.</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Age</th>
              <th>Blood Group</th>
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.tokenNumber}</td>
                <td>{patient.date}</td>
                <td>{patient.phone}</td>
                <td>{patient.email}</td>
                <td>{patient.age}</td>
                <td>{patient.bloodGroup}</td>
                <td>
                  <button onClick={() => onEditPatient(patient)}>Edit</button>
                  <button onClick={() => onDeletePatient(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReportsView;

