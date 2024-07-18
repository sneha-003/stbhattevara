import React, { useState } from 'react';

const StatusBar = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    'Application Submission',
    'NGO Verification',
    'Volunteer Validation',
    'Scholarship Approval'
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const statusBarStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '5px',
    position: 'relative'
  };

  const stepStyles = {
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative'
  };

  const activeStepStyles = {
    color: '#4caf50'
  };

  const circleStyles = (isActive) => ({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: isActive ? '#4caf50' : '#d3d3d3',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    zIndex: 1
  });

  const lineContainerStyles = {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundColor: '#d3d3d3',
    zIndex: 0,
    display: 'flex',
    justifyContent: 'space-between'
  };

  const lineSegmentStyles = (isActive) => ({
    width: '25%',
    height: '100%',
    backgroundColor: isActive ? '#4caf50' : '#d3d3d3',
    transition: 'background-color 0.3s'
  });

  return (
    <div style={statusBarStyles}>
      <div style={lineContainerStyles}>
        {steps.map((step, index) => (
          index < steps.length - 1 && (
            <div key={index} style={lineSegmentStyles(index < activeStep)}></div>
          )
        ))}
      </div>
      {steps.map((step, index) => (
        <div
          key={index}
          style={{ ...stepStyles, ...(index <= activeStep && activeStepStyles) }}
          onClick={() => handleStepClick(index)}
        >
          <div style={circleStyles(index <= activeStep)}>{index + 1}</div>
          <div>{step}</div>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;