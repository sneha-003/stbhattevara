import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// TrusteeLevel components
import TrusteeLevel from './TrusteeLevel/main';
import SelectionRecord from './TrusteeLevel/SelectionRecord';
import Analytics from './TrusteeLevel/Analytics';
import Status from './TrusteeLevel/Status';
import specificStudent from './Volunteer/specificStudent'

// Volunteer components
import VolLogin from './Volunteer/VolunteerLogin';
import VolSignup from './Volunteer/SignupPage'
import Vol from './Volunteer/main';
import StudentDetails from './Volunteer/studentDetails';
import MeetingForm from './Volunteer/meeting';
import VolStatus from './Volunteer/specificStudent'

// Authentication components
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Home from './components/Home';

//Alumni Components
import AlumniConnections from './alumniLevel/AlumniConnections';
import AlumniHome from './alumniLevel/AlumniHome';
import AlumniProfile from './alumniLevel/AlumniProfile';

import RegisterForm from './components/RegisterForm';
import RenewalForm from './components/RenewalForm';
import Dashboard from './components/Dashboard';


import NGOLogin from './ngoLevel/NGOLogin';
import NGOSignup from './ngoLevel/NGOSignupPage'
import StudentDetail from './ngoLevel/studentDetail';
import StudentList from './ngoLevel/studentList';
import AboutPage from './components/about';
import StudentMain from './components/tabs/StudentMain';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Home and Authentication Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    
                    {/* TrusteeLevel Routes */}
                    <Route path="/trustee" element={<TrusteeLevel />} />
                    <Route path="/selection-record" element={<SelectionRecord />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/status/:id" element={<Status />} />
                    
                    {/* Volunteer Routes */}
                    <Route path="/volunteer" element={<Vol />} />
                    <Route path="/volunteer/login" element={<VolLogin/>}/>
                    <Route path="/volunteer/signup" element={<VolSignup/>}/>
                    <Route path="/volunteerStudentDetails" element={<StudentDetails />} />
                    <Route path="/volunteerMeeting" element={<MeetingForm />} />
                    <Route path="/volunteerSpecificStudent/:id" element={<Status/>} />

                    {/* Alumni Routes */}
                    <Route path="/alumni/home" element={<AlumniHome />} />
                    <Route path="/alumni/profile" element={<AlumniProfile />} />
                    <Route path="/alumni/connections" element={<AlumniConnections />} />
                    <Route path="/about" element={<AboutPage/>}></Route>

                    <Route path="/dashboard" element={< Dashboard/>} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/renew" element={<RenewalForm />} />

                    <Route path="/StudentMain" element={<StudentMain/>}/>
                    <Route path="/NGO/login" element={<NGOLogin/>}/>
                    <Route path="/NGO/signup" element={<NGOSignup/>}/>
                    <Route path="/studentlist" element={<StudentList />} /> {/* Corrected route for StudentList */}
                    <Route path="/student/:id" element={<StudentDetail />} />
                    </Routes>
            </div>
        </Router>
    );
}

export default App;
