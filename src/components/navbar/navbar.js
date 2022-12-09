import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
return (
<div className='navbar'>
    <ul>
        <li ><h3 className='logo'>YouHeal</h3></li>
        <Link to='/'><li>Home</li></Link>
        <Link to='/ourservices'><li>Services</li></Link>
        <Link to='/aboutus'><li>About Us</li></Link>
        <Link to='/gallery'><li>Gallery</li></Link>
        <Link to='/contactus'><li>Contact us</li></Link>
        <Link to='/logins'><li>Logins</li></Link>
        <Link to='/departments'><li><button className='NavButton'>Book an Appointment</button></li></Link>
    </ul>
</div>
)
}

export default Navbar