import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Grid, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

const Status = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [student, setStudent] = useState({});
    const [review, setReview] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3500/scholar/student/${params.id}`) // Check if this URL is correct
            .then(response => {
                setStudent(response.data);
                console.log(student) // Set the fetched student in state
            })
            .catch(error => {
                console.error('Error fetching student:', error); // Add proper error handling here
            });
    }, [params.id]);
    

    const handleAccept = () => {
        console.log(`Accepted ${student.Name} with amount: ${amount}`);
    };

    const handleDecline = () => {
        console.log(`Declined ${student.Name}`);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = () => {
        console.log(`Review submitted: ${review}`);
        console.log(`Amount submitted: ${amount}`);
        setReview('');
        setAmount('');
    };


    return (
        <Container maxWidth="md" style={styles.container}>
            <Typography variant="h4" style={styles.header}>
                Status Page for {student.name}
            </Typography>
            <Paper elevation={3} style={styles.paper}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            ID: {student._id}<br />
                            Name: {student.Name}<br />
                            Major: {student.courseName}<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#4CAF50', color: 'white' }}
                            onClick={handleAccept}
                        >
                            Accept
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#f44336', color: 'white' }}
                            onClick={handleDecline}
                        >
                            Decline
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Review"
                            multiline
                            rows={4}
                            fullWidth
                            value={review}
                            onChange={handleReviewChange}
                            variant="outlined"
                            style={{ marginBottom: '10px' }}
                        />
                        <TextField
                            label="Amount"
                            fullWidth
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Submit Review
                        </Button>
                    </Grid>
                </Grid>
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

export default Status;
