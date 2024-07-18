import React from 'react';
import './basic.css'; // Import the CSS file

const BasicDetails = () => {
  return (
    <div className="basic-details-container">
      <h3>Basic Details</h3>
      <form className="basic-details-form">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="Name" />
        </div>
        <div className="form-group">
          <label>Course Name:</label>
          <input type="text" name="courseName" />
        </div>
        <div className="form-group">
          <label>Total Duration:</label>
          <input type="number" name="totalDuration" />
        </div>
        <div className="form-group">
          <label>Institute Name:</label>
          <input type="text" name="instituteName" />
        </div>
        <div className="form-group">
          <label>Affiliated University:</label>
          <input type="text" name="affiliatedUniversity" />
        </div>
        <div className="form-group">
          <label>Current Year Fees:</label>
          <input type="number" name="currentYearFee" />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Postal Address:</label>
          <input type="text" name="postalAddress" />
        </div>
        <div className="form-group">
          <label>Whatsapp Number:</label>
          <input type="number" name="whatsappNumber" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
      </form>
    </div>
  );
}

export default BasicDetails;
