import React from 'react';
import './ed.css'; // Import the CSS file

const EducationDetails = () => {
  return (
    <div className="education-details-container">
      <h3>Education Details</h3>
      <form className="education-details-form">
        <div className="form-group">
          <label>Highest Qualification:</label>
          <input type="text" name="qualification" />
        </div>
        <div className="form-group">
          <label>Institution:</label>
          <input type="text" name="institution" />
        </div>
        <div className="form-group">
          <label>Year of Passing:</label>
          <input type="text" name="yearOfPassing" />
        </div>
      </form>
    </div>
  );
}

export default EducationDetails;
