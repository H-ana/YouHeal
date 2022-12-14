import React from 'react';
import './bookappnmt.css';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
function BookApt(){
    return(
 <div className='book-inputs'>
    <Link to='/departments'><h1 className='goback'><BsFillArrowLeftCircleFill/></h1></Link>
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