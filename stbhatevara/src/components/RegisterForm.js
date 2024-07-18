import React, { useState } from 'react';
import BasicDetails from './tabs/BasicDetails';
import EducationDetails from './tabs/EducationDetails';
import FamilyDetails from './tabs/FamilyDetails';
import FinancialDetails from './tabs/FinancialDetails';
import MedicalHistory from './tabs/MedicalHistory';
import Payment from './tabs/Payment';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css'

const RegisterForm = () => {
  const [currentTab, setCurrentTab] = useState(0); // State to track current tab
  const navigate = useNavigate(); // To navigate programmatically

  const handleSaveAndNext = () => {
    if (currentTab < 5) { // Assuming there are 6 tabs (0 to 5)
      setCurrentTab(currentTab + 1);
    } else { // Redirect to dashboard after final tab (Payment)
      navigate('/dashboard'); // Redirect to dashboard route
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {/* Implement tabs with multiple components */}
      {currentTab === 0 && <BasicDetails />}
      {currentTab === 1 && <EducationDetails />}
      {currentTab === 2 && <FamilyDetails />}
      {currentTab === 3 && <FinancialDetails />}
      {currentTab === 4 && <MedicalHistory />}
      {currentTab === 5 && <Payment />}
      
      {/* Save and Next Button */}
      <button onClick={handleSaveAndNext}>
        {currentTab < 5 ? 'Save and Next' : 'Submit'}
      </button>
    </div>
  );
}

export default RegisterForm;
