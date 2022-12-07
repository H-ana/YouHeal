import React from 'react';
import './contactus.css';
import contact from '../../images/contactus.png';
function Contactus() {
  return (
    <div className='contact'>
    <h1>Contact Us</h1>
    <div className='contact-us'>
        <div className='contact-inputs'>
        <label>
            Your Name
            <input type="text"/>
        </label>
        <label>
            Mobile Number
            <input type="text"/>
        </label>
        <label>
            Your Email
            <input type="text"/>
        </label>
        <label>
            Your Message
            <input type="text" className='message'/>
        </label>
        <center><button className='send-button'>Send</button></center>
    </div>
    <img src={contact} />
    </div>
    </div>
  )
}

export default Contactus
