// // src/components/Status.js
// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Button, TextField, Checkbox, FormControlLabel, Card, CardContent, CardActions, Grid, Box } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';




// const specificStudent = () => {
//     const [students,setStudents] = useState([])
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [student, setStudent] = useState(null);
//     const [review, setReview] = useState('');
//     const [file, setFile] = useState(null);
//     const [isFileUploaded, setIsFileUploaded] = useState(false);
//     const [isInterviewCompleted, setIsInterviewCompleted] = useState(false);
//     const [checkboxes, setCheckboxes] = useState({
//         documentsAttached: false,
//         studentsEssayAttached: false,
//         studentPassbookAttached: false,
//         parentPassbookAttached: false,
//         marksheetsAttached: false,
//         feeReceiptAttached: false,
//         fatherNoMore: false,
//         motherNoMore: false,
//         fatherHandicapped: false,
//         motherHandicapped: false,
//     });

//     useEffect(() => {
//         const fetchStudent = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3500/scholar/student/${id}`);
//                 setStudent(response.data);
//                 console.log(student)
//             } catch (error) {
//                 console.error("Error fetching student data:", error);
//                 navigate('/');
//             }
//         };
//         fetchStudent();
//     }, [id, navigate]);
    

//     const handleAccept = () => {
//         if (isInterviewCompleted) {
//             console.log(`Accepted ${student.name}`);
//         } else {
//             alert("Please complete the interview before accepting.");
//         }
//     };

//     const handleDecline = () => {
//         console.log(`Declined ${student.name}`);
//     };

//     const handleReviewChange = (event) => {
//         setReview(event.target.value);
//     };

//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         if (selectedFile) {
//             setFile(selectedFile);
//             setIsFileUploaded(true);
//         } else {
//             setFile(null);
//             setIsFileUploaded(false);
//         }
//     };

//     const handleInterviewCompletedChange = (event) => {
//         setIsInterviewCompleted(event.target.checked);
//     };

//     const handleCheckboxChange = (event) => {
//         const { name, checked } = event.target;
//         setCheckboxes(prevState => ({
//             ...prevState,
//             [name]: checked,
//         }));
//     };

//     const handleSubmit = () => {
//         if (isFileUploaded) {
//             console.log(`Review submitted: ${review}`);
//             console.log('Checkboxes:', checkboxes);
//             setReview('');
//         } else {
//             alert("Please upload a file before submitting the review.");
//         }
//     };

//     if (!student) {
//         return (
//             <Container style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <Typography variant="h4">Student not found</Typography>
//             </Container>
//         );
//     }

//     return (
//         <Container maxWidth="md" style={{ backgroundColor: '#ffffff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
//             <Card>
//                 <CardContent>
//                     <Typography variant="h5" align="center" gutterBottom style={{ color: '#333333' }}>
//                         Application Status for {student.name}
//                     </Typography>
//                     <Typography variant="body1" gutterBottom style={{ color: '#666666' }}>
//                         <strong>ID:</strong> {student.id}<br />
//                         <strong>Name:</strong> {student.name}<br />
//                         <strong>Age:</strong> {student.age}<br />
//                         <strong>Major:</strong> {student.major}<br />
//                         <strong>Status:</strong> {student.status}
//                     </Typography>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={isInterviewCompleted}
//                                         onChange={handleInterviewCompletedChange}
//                                         name="interviewCompleted"
//                                         color="primary"
//                                     />
//                                 }
//                                 label="Interview Completed"
//                                 style={{ marginBottom: '10px' }}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Box display="flex" flexDirection="column" alignItems="center">
//                                 <input
//                                     accept="image/*,video/*"
//                                     style={{ display: 'none' }}
//                                     id="upload-file"
//                                     type="file"
//                                     onChange={handleFileChange}
//                                 />
//                                 <label htmlFor="upload-file">
//                                     <Button variant="contained" component="span" color="secondary">
//                                         Upload File
//                                     </Button>
//                                 </label>
//                                 {file && <Typography variant="body2" style={{ marginTop: '10px' }}>{file.name}</Typography>}
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//                 <CardContent>
//                     <Typography variant="h6" gutterBottom style={{ color: '#333333' }}>
//                         Verified that:
//                     </Typography>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.documentsAttached} onChange={handleCheckboxChange} name="documentsAttached" />}
//                                 label="All documents attached"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.studentsEssayAttached} onChange={handleCheckboxChange} name="studentsEssayAttached" />}
//                                 label="Student’s essay attached"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.studentPassbookAttached} onChange={handleCheckboxChange} name="studentPassbookAttached" />}
//                                 label="Student’s passbook/statement attached"
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.parentPassbookAttached} onChange={handleCheckboxChange} name="parentPassbookAttached" />}
//                                 label="Parent’s passbook/statement attached"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.marksheetsAttached} onChange={handleCheckboxChange} name="marksheetsAttached" />}
//                                 label="Marksheets (10th, 12th, College) attached"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.feeReceiptAttached} onChange={handleCheckboxChange} name="feeReceiptAttached" />}
//                                 label="Last year fee receipt/s attached"
//                             />
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//                 <CardContent>
//                     <Typography variant="h6" gutterBottom style={{ color: '#333333' }}>
//                         Comments on family status of the applicant:
//                     </Typography>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.fatherNoMore} onChange={handleCheckboxChange} name="fatherNoMore" />}
//                                 label="Father no more"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.motherNoMore} onChange={handleCheckboxChange} name="motherNoMore" />}
//                                 label="Mother no more"
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.fatherHandicapped} onChange={handleCheckboxChange} name="fatherHandicapped" />}
//                                 label="Father handicapped"
//                             />
//                             <FormControlLabel
//                                 control={<Checkbox checked={checkboxes.motherHandicapped} onChange={handleCheckboxChange} name="motherHandicapped" />}
//                                 label="Mother handicapped"
//                             />
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//                 <CardContent>
//                     <TextField
//                         label="Other comments"
//                         multiline
//                         rows={6}
//                         fullWidth
//                         variant="outlined"
//                         value={review}
//                         onChange={handleReviewChange}
//                         style={{ marginTop: '20px' }}
//                     />
//                 </CardContent>
//                 <CardActions style={{ justifyContent: 'center', marginBottom: '20px' }}>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={handleAccept}
//                         style={{ marginRight: '10px' }}
//                     >
//                         Accept
//                     </Button>
//                     <Button
//                         variant="contained"
//                         color="error"
//                         onClick={handleDecline}
//                     >
//                         Decline
//                     </Button>
//                 </CardActions>
//             </Card>
//         </Container>
//     );
// };

// export default specificStudent;
