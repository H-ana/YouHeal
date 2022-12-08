import React from 'react';
import './gallery.css';
import {data} from'../../data';
function Gallery() {
  const [gallery, setgallery] = React.useState(data);
  return (
    <div>
      <>
      {
        gallery.map((item) =>{
        const {image} = item;
        return(
        <div className='item'>
          <img src={image}/>
        </div>
      )
    })
  }
  </>
  </div>
  )
}

export default Gallery;
