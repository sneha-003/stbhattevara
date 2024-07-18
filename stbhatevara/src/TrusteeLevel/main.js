// src/components/TrusteeLevel.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  CardContent, CardActions, Button, Typography, Container, Grid, Paper } from '@mui/material';

const TrusteeLevel = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" style={styles.container}>
            <Typography variant="h4" style={styles.header}>Trustee Level</Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={styles.card}>
                        <CardContent>
                            <Typography variant="h5" style={styles.cardTitle}>Selection Record</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Manage and review selection records.
                            </Typography>
                        </CardContent>
                        <CardActions style={styles.cardActions}>
                            <Button
                                fullWidth
                                size="large"
                                color="primary"
                                variant="contained"
                                onClick={() => navigate('/selection-record')}
                            >
                                Go to Selection Record
                            </Button>
                        </CardActions>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={styles.card}>
                        <CardContent>
                            <Typography variant="h5" style={styles.cardTitle}>View Analytics</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Analyze data and view analytics.
                            </Typography>
                        </CardContent>
                        <CardActions style={styles.cardActions}>
                            <Button
                                fullWidth
                                size="large"
                                color="primary"
                                variant="contained"
                                onClick={() => navigate('/analytics')}
                            >
                                Go to View Analytics
                            </Button>
                        </CardActions>
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
    cardActions: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 'auto',
    },
};

export default TrusteeLevel;
