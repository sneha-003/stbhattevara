import React from 'react';
import './fin.css'; // Import the CSS file

const FinancialDetails = () => {
  return (
    <div className="financial-details-container">
      <h3>Financial Details</h3>
      <form className="financial-details-form">
        <div className="form-group">
          <label>Annual Income:</label>
          <input type="text" name="annualIncome" />
        </div>
        <div className="form-group">
          <label>Source of Income:</label>
          <input type="text" name="sourceOfIncome" />
        </div>
      </form>
    </div>
  );
}

export default FinancialDetails;
