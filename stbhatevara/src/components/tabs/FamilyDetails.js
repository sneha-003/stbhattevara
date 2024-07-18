import React from 'react';
import './fam.css'; // Import the CSS file

const FamilyDetails = () => {
  return (
    <div className="family-details-container">
      <h3>Family Details</h3>
      <form className="family-details-form">
        <div className="form-group">
          <label>Father's Name:</label>
          <input type="text" name="fatherName" />
        </div>
        <div className="form-group">
          <label>Mother's Name:</label>
          <input type="text" name="motherName" />
        </div>
        <div className="form-group">
          <label>Siblings:</label>
          <input type="text" name="siblings" />
        </div>
      </form>
    </div>
  );
}

export default FamilyDetails;
