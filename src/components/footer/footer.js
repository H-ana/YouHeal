import React from 'react'
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs';
import './footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='About-us'>
        <ul className='list'>
            <li><h3>Useful Links</h3></li>
            <li>About Us</li>
            <hr></hr>
            <li>Services</li>
            <hr></hr>
            <li>Logins</li>
            <hr></hr>
            <li>Gallery</li>
            <hr></hr>
            <li>Contact us</li>
            <hr></hr>
        </ul>
      </div>
      <div className='contact'>
        <ul className='list'>
            <li><h3>Contact</h3></li>
            <li>D-204,Hole Town South West,Delhi-11096,India</li>
            <li>Phone : +9454654545</li>
            <li>Email : youheal@gmail.com</li>
            <li><div className='social'><BsInstagram/><BsFacebook/><BsTwitter/></div></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer