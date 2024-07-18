import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import axios from 'axios';

const data = [
    { year: '2015', amount: 8000 },
    { year: '2016', amount: 10500 },
    { year: '2017', amount: 14000 },
    { year: '2018', amount: 7000 },
    { year: '2019', amount: 16500 },
    { year: '2020', amount: 18000 },
    { year: '2021', amount: 14500 },
    { year: '2022', amount: 19500 },
    { year: '2023', amount: 20000 },
    { year: '2024', amount: 40000 },
    // Add more years and amounts with variations
];

const studentData = [
    { category: 'Men', count: 25 },
    { category: 'Women', count: 35 },
    // Add more data points as needed
];

const Analytics = () => {
    const [recentScholarshipRecords, setRecentScholarshipRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/scholar/getAllStudents')
            .then((res) => {
                console.log('Response data:', res.data);  
                setRecentScholarshipRecords(res.data);
            })
            .catch((err) => {
                console.log('Error:', err);
            });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
                Analytics Dashboard
            </Typography>
            <Grid container spacing={3}>
                {/* Grid showing student count */}
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: 120,
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Student Scholarship Count
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell align="right">Count</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {studentData.map((row) => (
                                        <TableRow key={row.category}>
                                            <TableCell component="th" scope="row">
                                                {row.category}
                                            </TableCell>
                                            <TableCell align="right">{row.count}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                {/* Stock Graph */}
                <Grid item xs={12} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                        }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" dot={{ stroke: '#8884d8', strokeWidth: 2 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                {/* Additional Analytics */}
                <Grid item xs={12} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                            overflow: 'auto', // Add overflow auto to ensure scroll if needed
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Additional Data
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Recent Scholarship Records
                        </Typography>
                        <TableContainer sx={{ maxHeight: '100%' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Student Name</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recentScholarshipRecords.map((record, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{record.date}</TableCell>
                                            <TableCell>{record.Name}</TableCell>
                                            <TableCell align="right">{record.currentYearFee}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Analytics;
