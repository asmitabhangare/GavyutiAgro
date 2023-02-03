import React from 'react'
import rgst from '../asset/RGST.PNG'
import rec from '../asset/rec.png'

const Recognition = () => {
  return (
    <div className='mt-8 mb-20'>
      <div className='text-center font-extrabold text-4xl text-textunder'>
    Recognition
  </div>

  <div className='w-9/12 mt-8 h-auto mx-auto items-center justify-center md:grid md:grid-cols-2'>
    <div className=' m-8 border-double '>
      <img src={rgst} className="md:h-80 md:w-full" />
      <p className='text-3xl text-center italic mt-4 mb-4 font-semibold'>
      ATC RGSTC Workshop
      </p>
    </div>
    <hr className='md:hidden h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-10 dark:bg-gray-700'/>
    <div className='m-8 border-double '>
    <img src={rec} className="md:h-96 md:w-full"/>
    </div>
    

  </div>
  

  </div>
  )
}

export default Recognition