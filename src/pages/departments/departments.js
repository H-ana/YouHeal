import React from 'react';
import { Link } from 'react-router-dom';
import './departments.css';
import Dept1 from '../../images/dept1.png';
import Dept2 from '../../images/dept2.png';
import Dept3 from '../../images/dept3.png';
import Dept4 from '../../images/dept4.png';
import Dept5 from '../../images/dept5.png';
import Dept6 from '../../images/dept6.png';
function Dept(){
return(
<div className='Dept1'>
    <h1>Departments</h1>
    <div className='Dept2'>

    <Link to='/departments/anaesthesia'><div className='D3'><img src={Dept6}/><h3>Anaesthesia</h3></div></Link>
    <div className='D3'><img src={Dept1}/><h3>Cardiology</h3></div>
    <div className='D3'><img src={Dept2}/><h3>Audiology</h3></div>
    <div className='D3'><img src={Dept3}/><h3>Nephrology</h3></div>
    <div className='D3'><img src={Dept4}/><h3>Ophthalmology</h3></div>
    <div className='D3'><img src={Dept5}/><h3>Paediatrics</h3></div>
    </div>
</div>
);
}
export default Dept;