// src/components/StudentList.js
import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science', status: 'Pending Approval' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Law', status: 'Pending Approval' },
    { id: 3, name: 'Mike Johnson', age: 21, major: 'Psychology', status: 'Pending Approval' },
];

const StudentList = () => {
    const navigate = useNavigate();

    const handleStudentClick = (student) => {
        navigate(`/student/${student.id}`);
    };

    return (
        <Container maxWidth="md" style={styles.container}>
            <Typography variant="h4" style={styles.header}>Student List</Typography>
            <Paper elevation={3} style={styles.paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Major</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                key={student.id}
                                onClick={() => handleStudentClick(student)}
                                style={{ cursor: 'pointer' }}
                            >
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.age}</TableCell>
                                <TableCell>{student.major}</TableCell>
                                <TableCell>{student.status}</TableCell>
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

export default StudentList;