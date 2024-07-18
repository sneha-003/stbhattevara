import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Container, Grid ,Paper,Box} from '@mui/material';
import axios from 'axios';

const StudentDetails = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3500/scholar/student')
            .then(response => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/volunteerSpecificStudent/${id}`);
    };

    return (
        <Container style={styles.container}>
            <Typography variant="h4" style={styles.header}>Student Details</Typography>
            <Paper elevation={3} style={styles.table}>
                <Box style={styles.tableHeader}>
                    <Grid container>
                        <Grid item xs={3} style={styles.tableHeaderCell}><Typography variant="h6">Name</Typography></Grid>
                        <Grid item xs={2} style={styles.tableHeaderCell}><Typography variant="h6">Age</Typography></Grid>
                        <Grid item xs={3} style={styles.tableHeaderCell}><Typography variant="h6">Course</Typography></Grid>
                        <Grid item xs={4} style={styles.tableHeaderCell}><Typography variant="h6">Major</Typography></Grid>
                    </Grid>
                </Box>
                {students.map(student => (
                    <Grid item key={student._id}>
                        <Card style={styles.card} onClick={() => handleCardClick(student._id)}>
                            <CardContent style={styles.cardContent}>
                                <Typography variant="h6" style={styles.name}>{student.Name}</Typography>
                                <Typography variant="body2" color="textSecondary" style={styles.detail}>
                                    Course: {student.courseName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Paper>
        </Container>
    );
};

const styles = {
    container: {
        marginTop: '20px'
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    table: {
        width: '100%',
        overflowX: 'auto'
    },
    tableHeader: {
        backgroundColor: '#f5f5f5',
        padding: '10px'
    },
    tableHeaderCell: {
        padding: '10px'
    },
    tableRow: {
        borderBottom: '1px solid #e0e0e0',
        cursor: 'pointer', // Make cursor pointer to indicate clickable
        '&:hover': {
            backgroundColor: '#f9f9f9'
        }
    },
    tableCell: {
        padding: '10px'
    }
};

export default StudentDetails;
