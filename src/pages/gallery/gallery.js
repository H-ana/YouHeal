import React from 'react';
import image1 from '../../images/gallery1.png';
import image2 from '../../images/gallery2.png';
import image3 from '../../images/gallery3.png';
import image4 from '../../images/gallery4.png';
import image5 from '../../images/gallery5.png';
import image6 from '../../images/gallery6.png';
import image7 from '../../images/gallery7.png';
import image8 from '../../images/gallery8.png';
import './gallery.css';
function Gallery() {
  return (
    <div className='gallery-main'>
      <h1>Gallery</h1>
    <div className='gallery-container'>
      <img src={image1}/>
      <img src={image2}/>
      <img src={image3}/>
      <img src={image4}/>
      <img src={image5}/>
      <img src={image6}/>
      <img src={image7}/>
      <img src={image8}/>
    </div>
    </div>
  )
}

export default Gallery;
