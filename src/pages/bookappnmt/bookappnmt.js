import React from 'react';
import './bookappnmt.css';

function BookApt(){
    return(
 <div className='book-inputs'>
    <h1>Book Appointment</h1>
        <input type='text' placeholder=' Enter Full Name'></input>
        <input type='text' placeholder=' Enter Mobile Number'></input>
        <input type='text' placeholder=' Enter Email Address'></input>
        <input type='text' placeholder=' Enter Appointment Date'></input>
        <input type='text' placeholder=' Enter Address Details'></input>
        <center><button className='book-button'>Book Appointment</button></center>
    </div>
        
    );
}
export default BookApt;