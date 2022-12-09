import React from 'react';
import { Link } from 'react-router-dom';
import './logins.css';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Patient from '../../images/patient.png';
import Doctor from '../../images/doctorlogin.png';
function Logins() {
  return (
    <div className='logins-main'>

        <Link to='/'><h1 className='back-button'><BsFillArrowLeftCircleFill/></h1></Link>
        <div className='logins-container'>
            <div className='logins-box'>
                <img src={Patient}/>
                <div className='box'>
                    <h2>Patient Login</h2>
                    <Link to='/'><button className='loginsbutton'>Click Here</button></Link>
                </div>
            </div>
            <div className='logins-box'>
                <img src={Doctor}/>
                <div className='box'>
                    <h2>Doctor Login</h2>
                    <button className='loginsbutton'>Click Here</button>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Logins;
