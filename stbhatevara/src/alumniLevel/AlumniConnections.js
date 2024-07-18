// alumniLevel/AlumniConnections.js
import React from 'react';
import { Container, Typography, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const alumniData = [
    {
        alumniName: 'John Doe',
        year: 2010,
        degree: 'B.Sc. Computer Science',
        connectedStudents: [
            { studentName: 'Alice Johnson', Course: 'React' },
            { studentName: 'Bob Smith', Course: 'JavaScript' },
            { studentName: 'Charlie Brown', Course: 'JavaScript' },
            { studentName: 'Diana Ross', Course: 'Django' }
        ]
    }
            
    // Add more alumni data as needed
];

const AlumniConnections = () => {
    return (
        <Container maxWidth="lg" style={styles.container}>
            <Typography variant="h4" style={styles.header}>
                Alumni Connections
            </Typography>
            {alumniData.map((alumni, index) => (
                <Paper key={index} style={styles.card}>
                    <Typography variant="subtitle1" style={styles.cardItem}>
                        {alumni.alumniName} - {alumni.year} - {alumni.degree}
                    </Typography>
                    <Typography variant="subtitle2" style={styles.cardItem} gutterBottom>
                        Connected Students:
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Student Name</TableCell>
                                    <TableCell align="right">Course</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {alumni.connectedStudents.map((student, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{student.studentName}</TableCell>
                                        <TableCell align="right">{student.Course}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            ))}
        </Container>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '40px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '40px',
        fontWeight: 'bold',
        color: '#333',
    },
    card: {
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    },
    cardItem: {
        marginBottom: '10px',
    },
};

export default AlumniConnections;
