import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

const SelectionRecord = () => {
    const [students, setStudents] = useState([]); // State to store fetched students
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3500/scholar/getAllStudents') // Adjust the URL to your API endpoint
            .then(response => {
                setStudents(response.data); // Set the fetched students in state
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    }, []); // Empty dependency array to fetch data only once on component mount

    const handleStudentClick = (student) => {
        navigate(`/status/${student._id}`);
    };

    return (
        <Container maxWidth="md" style={styles.container}>
            <Typography variant="h4" style={styles.header}>Selection Record</Typography>
            <Paper elevation={3} style={styles.paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Major</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                key={student._id}
                                onClick={() => handleStudentClick(student)}
                                style={{ cursor: 'pointer' }}
                            >
                                <TableCell>{student._id}</TableCell>
                                <TableCell>{student.Name}</TableCell>
                                <TableCell>{student.courseName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    );
};

const styles = {
    container: {
        marginTop: '20px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '20px',
    },
    paper: {
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default SelectionRecord;
