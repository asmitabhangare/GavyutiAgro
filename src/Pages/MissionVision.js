import React from 'react'
import vision from '../asset/vision.png'

const MissionVision = () => {
  return (
    <div className='mt-8 mb-0'>
      <div className='text-center font-extrabold text-4xl text-textunder'>
    Mission & Vision
  </div>
  <div className='h-auto w-9/12 drop-shadow-2xl mx-auto items-center justify-center md:grid md:grid-cols-2'>
    <div className=''>
      <div className=''>
      <img src={vision} className="scale-75 object-fill relative  border-double border-4 border-textunder"/>
      </div>

    </div>
    <div className='md:grid md:grid-rows-2'>
    <div className='mb-12'>
    <p className='text-3xl text-center mt-4 font-semibold underline underline-offset-8 decoration-textunder decoration-4'>
    Mission
      </p>
      <p className='text-2xl text-center italic mt-4 font-semibold'>
      Our mission is to produce nutritive balanced, complete feed  for animals. Simultaneously protecting environment
       and generating extra income to the farmers and businesses(goat and milk).  
      </p>
      </div>      
<div className=''>
<p className='text-3xl text-center mt-4 font-semibold underline underline-offset-8 decoration-textunder decoration-4'>
    Vision
      </p>
      <p className='text-2xl text-center italic mt-4 font-semibold'>
      To build a trustworthy brand in complete feed for animals. 
      </p>
</div>
    </div>
  </div>
    </div>
  )
}

export default MissionVision