import React from 'react';
import './ourservices.css';
import doctor from '../../images/image 24.png';
function Ourservices() {
  return (
    <div className='os-main'>
        <h1>Our Services</h1>
        <p>Learn more about the various services offered by our clinic and how we provide you with world class care.</p>
    <div className='os'>
      <div className='os-lt'>
        <div className='details'>
            <h2>Echocardiograms</h2>
            <p>Associates is able to view thew beating of the heart and many of its structures</p>
        </div>
        <div className='details'>
            <h2>Pediatric Services</h2>
            <p>If you are expecting a child, follow-up care with our clinic pediatricians can be arranged prior to or after your hospital/ birth discharge</p>
        </div>
        <div className='details'>
            <h2>Women's Healthcare</h2>
            <p>Women's health is a field covering the numerous health concerns that women face from reproductive and sexual health to mamograms</p>
        </div>
      </div>
      <img src={doctor}/>
      <div className='os-rt'>
        <div className='details'>
            <h2>Dermatology</h2>
            <p>Our providers are trained to handle a spectrum of skin conditions, covering the majority of your dermatology</p>
        </div>
        <div className='details'>
            <h2>Laboratory Testing</h2>
            <p>Laboratory orders are created within the patient's electronic medical record(EHR) and transmitted to our laboratory once the sample is obtained.</p>
        </div>
        <div className='details'>
            <h2>CT Scans</h2>
            <p>A CT Scan(Computed Tomography) scan is a non-invasive procedure that allows providers to view 3D images taken from a series of 2D X-ray images</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ourservices
