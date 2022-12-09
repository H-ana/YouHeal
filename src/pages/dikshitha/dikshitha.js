import React from 'react';
import './dikshitha.css';
import Doc from '../../images/doctor.png';
import { Link } from 'react-router-dom';
function Diksh(){
    return(
        <div className='di1'>
            <div className='di2'>
                <img src={Doc}/>
                <div className='di3'>
                    <h2 className='Name'>Dr Dikshitha Chetty</h2>
                    <h3>Anaesthesia(Specialist) ,YouHeal Hospital</h3>
                    <h2>Languages</h2>
                    <h3>English, Hindi, Tamil </h3>
                </div>
            </div>
            <div className='di4'>
                <div className='di5'>
                    <h2>Services Offered</h2>
                    <ul>
                        <li><h3>General/Regional Anaesthesia</h3></li>
                        <li><h3>Preoperative pain management-epidural catheter placement and peripheral nerve blocks</h3></li>
                        <li><h3>Labor Analgesia</h3></li>
                        </ul>
                </div>
                <div className='di6'>
                    <h2>Professional Experience</h2>
                    <ul>
                        <li><h3>6 years of experience as a General Practitioner</h3></li>
                        <li><h3>7 months of experience (Post M.D) as a Specialist in Anaesthesia</h3></li>
                        </ul>
            <Link to='/bookappointment'><button className='BookAptButton'>Book an Appointment</button></Link>
                    
                </div>
            </div>
        </div>
        
    );
}
export default Diksh;