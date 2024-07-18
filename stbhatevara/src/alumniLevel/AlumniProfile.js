import React, { useState } from 'react';
import { Container, Typography, Paper, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const AlumniProfile = () => {
    const [editMode, setEditMode] = useState(false);
    const [skills, setSkills] = useState(['JavaScript', 'React']);
    const [newSkill, setNewSkill] = useState('');

    const availableSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'Django', 'Machine Learning'];

    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    const handleSkillChange = (event) => {
        setNewSkill(event.target.value);
    };

    const handleAddSkill = () => {
        if (newSkill && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
                Alumni Profile
            </Typography>
            <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">Name: John Doe</Typography>
                <Typography variant="h6">Qualification: B.Sc. Computer Science</Typography>
                <Typography variant="h6">Specialization: Web Development</Typography>
                <Typography variant="h6">Offerings: Soft Skills, Career Development and Communication</Typography>
                <Typography variant="h6">
                    Skills: {skills.join(', ')}
                </Typography>
                {editMode && (
                    <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="skill-select-label">Add Skill</InputLabel>
                        <Select
                            labelId="skill-select-label"
                            value={newSkill}
                            label="Add Skill"
                            onChange={handleSkillChange}
                        >
                            {availableSkills.map((skill) => (
                                <MenuItem key={skill} value={skill}>
                                    {skill}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleAddSkill}>
                            Add Skill
                        </Button>
                    </FormControl>
                )}
                <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleEditClick}>
                    {editMode ? 'Cancel' : 'Edit Skills'}
                </Button>
            </Paper>
        </Container>
    );
};

export default AlumniProfile;
