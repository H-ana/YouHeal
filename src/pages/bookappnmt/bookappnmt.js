import React from 'react';
import Book from '../../images/bookappt.png';
import './bookappnmt.css';

function BookApt(){
    return(
        <div className='bapt'>
        <img src={Book}/>
        <div className='bapt1'>
<h1>Book Appointment</h1>
 <div className='contact-inputs'>
        <label>
            Enter Full Name
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
        </div>
        </div>
    );
}
export default BookApt;