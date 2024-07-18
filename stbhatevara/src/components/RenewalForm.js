import React, { useState } from 'react';
import BasicDetails from './tabs/BasicDetails';
import EducationDetails from './tabs/EducationDetails';
import FinancialDetails from './tabs/FinancialDetails';
import Payment from './tabs/Payment';
import { useNavigate } from 'react-router-dom';
import './RenewalForm.css'

const RenewalForm = () => {
  const [currentTab, setCurrentTab] = useState(0); // State to track current tab
  const history = useNavigate(); // To navigate programmatically

  const handleSaveAndNext = () => {
    if (currentTab < 3) { // Assuming there are 4 tabs (0 to 3)
      setCurrentTab(currentTab + 1);
    } else { // Redirect to dashboard after final tab (Payment)
      history.push('/dashboard'); // Redirect to dashboard route
    }
  };

  return (
    <div>
      <h2>Renewal Form</h2>
      {/* Implement tabs with multiple components */}
      {currentTab === 0 && <BasicDetails />}
      {currentTab === 1 && <EducationDetails />}
      {currentTab === 2 && <FinancialDetails />}
      {currentTab === 3 && <Payment />}
      
      {/* Save and Next Button */}
      {currentTab < 3 && (
        <button onClick={handleSaveAndNext}>Save and Next</button>
      )}
    </div>
  );
}

export default RenewalForm;
