import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Correct path to slick.css
import 'slick-carousel/slick/slick-theme.css'; // Correct path to slick-theme.css
import './Home.css';
import stLogo from '../images/stlogo.png';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img5 from '../images/img5.jpeg'
import img4 from '../images/img4.jpeg';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="Home">
      <header className="header">
        <Slider {...sliderSettings}>
          <div><img src={img1} alt="Slide 1" /></div>
          <div><img src={img2} alt="Slide 2" /></div>
          <div><img src={img3} alt="Slide 3" /></div>
          <div><img src={img4} alt="Slide 4" /></div>
          <div><img src={img5} alt="Slide 5" /></div>

        </Slider>
        <div className="logo-title">
          <img src={stLogo} alt="Foundation Logo" className="logo" />
          <h1>S.T. BHATEVARA FOUNDATION</h1>
        </div>
      </header>

      <section className="content">
        <div className="division" id="student">
          <h2>Student</h2>
          <p>Information about student involvement...</p>
          <Link to="/login">Login</Link> {/* Link to login page */}
        </div>
        <div className="division" id="volunteer">
            <h2>Volunteer</h2>
            <p>Information about volunteering...</p>
            <Link to="volunteer/login">Login</Link> 
        </div>
        <div className="division" id="ngo">
          <h2>NGO</h2>
          <p>Information about the NGO...</p>
          <Link to="NGO/login">Login</Link> 
        </div>
        <div className="division" id="trust">
            <h2>Trustee</h2>
            <p>Information about trustee...</p>
            <Link to="/trustee">Visit</Link> 
        </div>
        <div className="division" id="alumni">
          <h2>Alumni</h2>
          <p>Information about alumni...</p>
          <Link to="/alumni/home">Visit</Link> 
        </div>
      </section>
      <section className="about-section">
        <Link to="/about" className="about-link">About</Link>
      </section>
      <footer className="footer">
        <p>&copy; 2024 stbhatevaraorg. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
