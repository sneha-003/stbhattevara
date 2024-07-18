// src/components/StudentDetail.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Checkbox, TextField, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science', status: 'Pending Approval' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Law', status: 'Pending Approval' },
    { id: 3, name: 'Mike Johnson', age: 21, major: 'Psychology', status: 'Pending Approval' },
];

const documents = [
    { name: 'ESSAY - HAND WRITTEN – BY STUDENT (ON GOALS OF LIFE)' },
    { name: 'PAN CARD – STUDENT' },
    { name: 'AADHAR CARD - STUDENT' },
    { name: 'MARK-SHEET - 10 /12/ LAST YEAR' },
    { name: 'FAMILY INCOME STATEMENT / BPL' },
    { name: 'BANK PASS-BOOK / STATEMENT OF ACCOUNTS OF PARENTS for last 1 year from the date of appln.' },
    { name: 'BANK PASS-BOOK / STATEMENT OF ACCOUNT OF STUDENT for last 1 year from the date of appln.' },
    { name: 'CURRENT YEAR’S FEE RECEIPT' },
    { name: 'FEES STRUCTURE STATEMENT (issued with student’s name)' },
    { name: 'CASTE CERTIFICATE (IF ANY )' },
    { name: 'LAST YEAR FEE RECEIPT/S' },
    { name: 'CAP Round admission confirmation letter with college Seal & Stamp should be attached.' },
    { name: 'Student Loan, if any' },
    { name: 'HOUSE VISIT OF STUDENT DONE' },
    { name: 'INTERVIEW OF STUDENT AND PARENTS DONE' }
];

const StudentDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [checkboxStates, setCheckboxStates] = useState({});
    const [remarks, setRemarks] = useState({});
    const [comment, setComment] = useState('');

    useEffect(() => {
        const studentId = parseInt(id);
        const foundStudent = students.find(student => student.id === studentId);
        if (foundStudent) {
            setStudent(foundStudent);
        } else {
            navigate('/');
        }
    }, [id, navigate]);

    const handleCheckboxChange = (index) => {
        setCheckboxStates({ ...checkboxStates, [index]: !checkboxStates[index] });
    };

    const handleRemarkChange = (index, event) => {
        setRemarks({ ...remarks, [index]: event.target.value });
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleAccept = () => {
        console.log(`Accepted ${student.name}`);
        console.log(`Comment: ${comment}`);
    };

    const handleDecline = () => {
        console.log(`Declined ${student.name}`);
        console.log(`Comment: ${comment}`);
    };

    if (!student) {
        return (
            <Container>
                <Typography variant="h4">Student not found</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" style={styles.container}>
            <Typography variant="h4" style={styles.header}>
                Documents for {student.name}
            </Typography>
            <Paper elevation={3} style={styles.paper}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Name: {student.name}<br />
                            ID: {student.id}<br />
                            Age: {student.age}<br />
                            Major: {student.major}<br />
                            Status: {student.status}<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>List of Documents</TableCell>
                                    <TableCell>Yes/No</TableCell>
                                    <TableCell>Remarks</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {documents.map((doc, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{doc.name}</TableCell>
                                        <TableCell>
                                            <Checkbox
                                                checked={checkboxStates[index] || false}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <TextField
                                                value={remarks[index] || ''}
                                                onChange={(event) => handleRemarkChange(index, event)}
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Comment"
                            multiline
                            rows={4}
                            fullWidth
                            value={comment}
                            onChange={handleCommentChange}
                            variant="outlined"
                            style={{ marginBottom: '10px' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleAccept}
                        >
                            Accept
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={handleDecline}
                        >
                            Decline
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

export default StudentDetail;