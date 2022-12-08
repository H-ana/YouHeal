import React from 'react';
import './logins.css';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Patient from '../../images/patient.png';
import Doctor from '../../images/doctorlogin.png';
function Logins() {
  return (
    <div className='logins-inputs'>
        <h1 className='back-button'><BsFillArrowLeftCircleFill/></h1>
        <div className='logins-box'>
            <div className='patient-login'>
                <img src={Patient}/>
            </div>
            <div className='doctor-login'>
                <img src={Doctor}/>
            </div>
                
        </div>
    </div>
  )
}

export default Logins;
