import React from 'react';
import './homepage.css';
import Img2 from '../../images/bottomimg.png';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';

function Home(){
    return(
        <div className='home'>
            <div className='hometop'>
            <h3 className='HMS'>Hospital Management System</h3>
            </div>
            <div className='homebottom'>
                <div className='bottomleft'>
                <img src={Img2} className='bottomimg'/>
                </div>
                <div className='bottomright'>
                <h2>Welcome To YouHeal Central Hospital</h2>
                <h4 className='decr'>We provide experienced doctors, state of the art technology, and the highest level of patient care and treatment. Our COE’s ensure that every aspect of your care is seamless and the team of experts work together to provide the care you need.
                </h4>
                <div className='homebox'>
                    <div className='homeboxitem'>
                    <h3 className='tickicon'><IoMdCheckmarkCircleOutline/></h3>
                    <h4>5000+ ready beds</h4>
                    </div>
                    <div className='homeboxitem'>
                    <h3 className='tickicon'><IoMdCheckmarkCircleOutline/></h3>
                    <h4>20+ icu solution</h4>
                    </div>
                    <div className='homeboxitem'>
                    <h3 className='tickicon'><IoMdCheckmarkCircleOutline/></h3>
                    <h4>Probably the Largest Hospital</h4>
                    </div>
                    <div className='homeboxitem'>
                    <h3 className='tickicon'><IoMdCheckmarkCircleOutline/></h3>
                    <h4>20/7 Open Support</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Home;