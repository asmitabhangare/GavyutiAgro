import React, { useState } from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";
import img1 from '../asset/img1.jpeg';
import img2 from '../asset/img2.jpeg';
import img3 from '../asset/img3.jpg'

const Slider = () => {
    
  return (
    <div className='md:mt-4 '>
        <ImageSlider effectDelay={0} autoPlayDelay={2000} >
      <Slide className="">
        <img alt="img1" src={img1}/>
      </Slide>
      
      <Slide>
        <img alt="img2" src={img2} />
      </Slide>

      <Slide>
        <img alt="img3" src={img3} />
      </Slide>

      
    </ImageSlider>
    </div>
  )
}

export default Slider