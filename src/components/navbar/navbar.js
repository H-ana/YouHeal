import React from 'react';
import './navbar.css';

function Navbar() {
return (
<div className='navbar'>
    <ul>
        <li ><h3 className='logo'>YouHeal</h3></li>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Gallery</li>
        <li>Contact Us</li>
        <li>Logins</li>
        <li><button className='NavButton'>Book an Appointment</button></li>
       
    </ul>
</div>
)
}

export default Navbar