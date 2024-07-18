import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const MeetingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    meetingType: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Meeting form submitted:', formData);
    // Replace with your logic to submit the meeting request (e.g., API call, email notification)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        InputLabelProps={{ shrink: true }}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        type="time"
        InputLabelProps={{ shrink: true }}
        required
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="meeting-type-label">Meeting Type</InputLabel>
        <Select
          labelId="meeting-type-label"
          name="meetingType"
          value={formData.meetingType}
          onChange={handleChange}
          required
        >
          <MenuItem value="One-on-One">One-on-One</MenuItem>
          <MenuItem value="Team Meeting">Team Meeting</MenuItem>
          <MenuItem value="Client Meeting">Client Meeting</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth margin="normal">
        Schedule Meeting
      </Button>
    </form>
  );
};

export default MeetingForm;
