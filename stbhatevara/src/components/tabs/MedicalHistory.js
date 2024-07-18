import React from 'react';

const MedicalHistory = () => {
  return (
    <div>
      <h3>Medical History</h3>
      <form>
        <div>
          <label>Any medical conditions:</label>
          <input type="text" name="medicalConditions" />
        </div>
        <div>
          <label>Medications:</label>
          <input type="text" name="medications" />
        </div>
      </form>
    </div>
  );
}

export default MedicalHistory;
