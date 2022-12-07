import React from 'react';
import './aboutus.css';
import About from '../../images/aboutusimg.png';
function AboutUs(){
    return(
        <div className='aboutus1'>
            <h1>About Us</h1>
            <div className='aboutus2'>
            <img className='aboutusimg' src={About}/>
            <h3>Our Vision <br/>A ‘Caring Mission with a Global Vision’</h3>
            </div>
            <p>We are one of the largest corporate healthcare groups in India with hospitals in Telangana, Andhra Pradesh & Maharashtra providing multi-disciplinary integrated healthcare services, with a focus on tertiary and quaternary healthcare at affordable cost.We offer a comprehensive range of healthcare services across over 25 specialties and super specialties, including cardiac sciences, oncology, neurosciences, gastric sciences, orthopaedics, organ transplantation, renal sciences and mother & child care.</p>
        </div>
    );
}
export default AboutUs;