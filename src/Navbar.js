// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import your styles

const Navbar = ({ onNavigate }) => {
  return (
    <div className="navbar">
      <div className="nav-item" onClick={() => onNavigate('calendar')}>
        <FontAwesomeIcon icon={faCalendar} />
        <span>Calendar</span>
      </div>
      <div className="nav-item" onClick={() => onNavigate('reports')}>
        <FontAwesomeIcon icon={faFileAlt} />
        <span>Reports</span>
      </div>
      {/* <div className="nav-item" onClick={() => onNavigate('settings')}>
        <FontAwesomeIcon icon={faCog} />
        <span>Settings</span>
      </div> */}
    </div>
  );
};

export default Navbar;
