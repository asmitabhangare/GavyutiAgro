import React from 'react'
import tushar from '../asset/tushar.jpg'
import rajan from '../asset/rajan.png'
import profile from '../asset/profile.png'

const Team = () => {
  return (
    <div className='mt-8'>
      <div className='text-center font-extrabold text-4xl text-textunder'>
        Our Team
      </div>
      <div className='h- w-9/12 mt-8  mx-auto items-center justify-center md:grid md:grid-cols-3'>
    <div className='h-96 m-8 border-double border-4 border-textunder'>
    <img src={rajan} className="h-60 m-auto items-center justify-center md:mt-4"/>
      <p className='text-3xl text-center italic mt-4 font-semibold'>
      Rajan Mishra 
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
      CEO
      </p>
    </div>
    <div className='h-96 m-8 border-double border-4 border-textunder'>
    <img src={profile} className="h-60 m-auto items-center justify-center md:mt-4"/>
    <p className='text-3xl text-center italic mt-4 font-semibold'>
    Lokesh Batra  
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
        CFO
      </p>
    </div>
    <div className='h-96 m-8 border-double border-4 border-textunder'>
    <img src={tushar} className="h-60 m-auto items-center justify-center md:mt-4"/>
    <p className='text-3xl text-center italic mt-4 font-semibold'>
    Tushar Bhagare  
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
        Operation Head
      </p>
    </div>

  </div>

  <div className='text-center font-extrabold text-4xl mt-4 text-textunder'>
        Advisors
      </div> 
      <div className='h- w-9/12 mt-8  mx-auto items-center justify-center md:grid md:grid-cols-3'>
    <div className='h-36 m-8 border-double border-4 border-textunder'>
      <p className='text-3xl text-center italic mt-4 font-semibold'>
      Dr Suhas Zambre 
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
      IIT Bombay 
      </p>
    </div>
    <div className='h-36 m-8 border-double border-4 border-textunder'>
    <p className='text-3xl text-center italic mt-4 font-semibold'>
    Prof Madhu Vinjamur 
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
      IIT Bombay 
      </p>
    </div>
    <div className='h-36 m-8 border-double border-4 border-textunder'>
    <p className='text-3xl text-center italic mt-4 font-semibold'>
    Dr Narendra Shah
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
      RGSTC Mumbai 
      </p>
    </div>

  </div>

  <div className='h- w-9/12   mx-auto items-center justify-center md:grid md:grid-cols-3'>
    <div className='h-36 m-8 border-double border-4 border-textunder'>
      <p className='text-3xl text-center italic mt-4 font-semibold'>
      Dr Atul Dhok  
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
      MAFSU Nagpur
      </p>
    </div>
    <div className='h-36 m-8 border-double border-4 border-textunder'>
    <p className='text-3xl text-center italic mt-4 font-semibold'>
    Dr Manoj Aware 
      </p>
      <p className='text-2xl text-center mt-2 font-bold'>
      BAIF pune
      </p>
    </div>
    <div className='h-36 m-8 border-double'>
    
    </div>

  </div>
    </div>
  )
}

export default Team