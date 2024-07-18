// alumniLevel/AlumniHome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';

const AlumniHome = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" style={styles.container}>
            <Typography variant="h4" style={styles.header}>
                Alumni Home
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={styles.card}>
                        <Typography variant="h5" style={styles.cardTitle}>
                            Profile
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            View and update your profile.
                        </Typography>
                        <Button
                            fullWidth
                            size="large"
                            color="primary"
                            variant="contained"
                            style={styles.button}
                            onClick={() => navigate('/alumni/profile')}
                        >
                            Go to Profile
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={styles.card}>
                        <Typography variant="h5" style={styles.cardTitle}>
                            Connections
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            View your connections with students.
                        </Typography>
                        <Button
                            fullWidth
                            size="large"
                            color="primary"
                            variant="contained"
                            style={styles.button}
                            onClick={() => navigate('/alumni/connections')}
                        >
                            Go to Connections
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
        marginBottom: '10px',
        color: '#333',
    },
    button: {
        marginTop: 'auto',
    },
};

export default AlumniHome;
