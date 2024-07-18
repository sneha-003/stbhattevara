// src/components/TrusteeLevel.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, Typography, Container } from '@mui/material';

const Vol = () => {
    const navigate = useNavigate();

    return (
        <Container style={styles.container}>
            <Typography variant="h4" style={styles.header}>Volunteer</Typography>
            <Card style={styles.card}>
                <CardContent>
                    <Typography variant="h5">View Assigned Student Details</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Review selected students.
                    </Typography>
                </CardContent>
                <CardActions style={styles.cardActions}>
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => navigate('/volunteerStudentDetails')}
                    >
                        Go to Student Records.
                    </Button>
                </CardActions>
            </Card>
            <Card style={styles.card}>
                <CardContent>
                    <Typography variant="h5">Schedule interview</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Schedule an interview with the student.
                    </Typography>
                </CardContent>
                <CardActions style={styles.cardActions}>
                    <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => navigate('/volunteerMeeting')}
                    >
                        Fill meeting details.
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
    },
    header: {
        marginBottom: '20px'
    },
    card: {
        minWidth: 275,
        marginBottom: '20px',
        width: '100%',
        maxWidth: '500px'
    },
    cardActions: {
        justifyContent: 'center'
    }
};

export default Vol;