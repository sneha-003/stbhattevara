import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h4" style={styles.header}>
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3} style={styles.paper}>
            <Typography variant="body1" style={styles.text}>
              St.Bhatevara is a non-governmental organization dedicated to the upliftment and empowerment of underprivileged communities through various educational and socio-economic initiatives. Our focus is on holistic development, ensuring that every individual, regardless of their background, has access to the resources and opportunities necessary to lead a dignified life.
              <br /><br />
              Since our inception, we have been committed to bridging the gap between the privileged and the underprivileged. We believe in the power of education as a fundamental right and a powerful tool for change. Our programs are designed to provide comprehensive support, from primary education to higher education, and vocational training, ensuring that individuals are well-equipped to face the challenges of the future.
              <br /><br />
              We also recognize the importance of healthcare and strive to provide access to quality medical services. Through our various health camps and initiatives, we aim to address the pressing health concerns of the communities we serve. Our holistic approach extends to socio-economic development, where we work on providing sustainable livelihood opportunities, fostering self-reliance and community resilience.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={styles.paper}>
            <Typography variant="h6" style={styles.subHeader}>
              Mission
            </Typography>
            <Typography variant="body1" style={styles.text}>
              Our mission is to provide quality education, healthcare, and livelihood support to marginalized communities, fostering sustainable development and social equity. We aim to create an environment where every individual has the opportunity to achieve their fullest potential.
              <br /><br />
              Education is at the core of our mission. We believe that by educating the youth, we can create a ripple effect that will uplift entire communities. Our educational programs are tailored to meet the needs of different age groups, from children to adults, and include a range of activities designed to enhance learning and personal development.
              <br /><br />
              In addition to education, we focus on health and wellness. We conduct regular health camps, providing free medical check-ups and treatments. We also run awareness campaigns to educate the community on important health issues. By addressing both educational and health needs, we strive to create a well-rounded approach to community development.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={styles.paper}>
            <Typography variant="h6" style={styles.subHeader}>
              Vision
            </Typography>
            <Typography variant="body1" style={styles.text}>
              Our vision is a society where every individual has access to basic necessities, education, and opportunities, enabling them to lead dignified and fulfilling lives. We envision a world where poverty is eradicated, and every person can achieve their dreams and contribute positively to society.
              <br /><br />
              We are committed to creating lasting change through innovative solutions and collaborative efforts. Our vision is to empower communities to become self-sufficient, ensuring long-term sustainability. By fostering a spirit of cooperation and inclusivity, we aim to build a stronger, more equitable society.
              <br /><br />
              We believe that true development can only be achieved when the voices of the community are heard and their needs addressed. Therefore, we actively involve community members in our planning and decision-making processes. Our vision is to create a model of development that is participatory, transparent, and accountable, ensuring that the benefits of our efforts reach those who need them the most.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  header: {
    marginBottom: '40px',
    textAlign: 'center',
    color: '#2e4053',
  },
  paper: {
    padding: '30px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    border: '1px solid #d5d8dc',
  },
  subHeader: {
    marginBottom: '20px',
    color: '#34495e',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: '#5d6d7e',
    lineHeight: '1.6',
  },
};

export default AboutPage;