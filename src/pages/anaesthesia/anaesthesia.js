import React from 'react';
import Ana from '../../images/anaesthesia.png';
import Doc from '../../images/doctor.png';
import './anaesthesia.css';
function Anas(){
    return(<div className='an2'>
        <div className='an1'>
            <img className='Anasimg'src={Ana}/>
            <div className='doc-grp'>
            <img className='Docimg'src={Doc} />
            <h4>Dr Dikshitha Chetty</h4>
            <h5>Anaesthesia(Specialist) <br/>YouHeal Hospital</h5>
            <center><button className='view-button'>View full profile</button></center>
            </div>
            </div>
            <h1>Anaesthesia</h1>
            <p>Anaesthesia refers to a controlled, near-zero-sensation state of the human body that is required for surgical / medical purposes. The branch of Surgical Anesthesia for OBG Surgeries relies on multiple pillars / purpose-driven procedures - Paralysis (Relaxation of the body muscles), Analgesia (pain prevention procedure), Amnesia (memory removal), and / or unconsciousness. ‘Anaesthetized’ refers to the state of being under an anaesthetic drug. Anaesthesia helps a number of painless surgeries, and medical procedures that may otherwise cause enormous pain and suffering to the patient. In certain cases, a surgery without anaesthesia may even be technically impossible. </p>
            </div>
    );
}
export default Anas;