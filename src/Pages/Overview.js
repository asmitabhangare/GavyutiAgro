import React from 'react'
import cattle from '../asset/cattle.jpg'

const Overview = () => {
  return (
    <div className='mt-8'>
      <div className='text-center font-extrabold text-4xl text-textunder'>
        Overview
      </div>


<div className="container mt-8 mb-16 mx-auto p-4 md:p-0">

  <div className="bg-dropbg shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
    

    <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
    <img src={cattle}/>
    </div>

    <div className="bg-blue w-full md:w-2/3">
    
      <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
       
        <div className="w-full lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
          
          <div className="w-full lg:w-24 lg:border-right lg:border-solid text-center md:text-left">
            
          </div>

          <div className="w-full lg:w-3/5 lg:px-3">
            <p className="text-md mt-8 md:mt-0 text-justify md:text-left text-2xl">
            We have started working in agriculture in 2019. Agriculture residue was tried to convert into animal feed . 
            <p className='mt-4'>
            Our Journey So Far:  Company Incorporated in 2022
            </p>
            </p>
          </div>
               
   
        </div>

      </div>

    </div>

  </div>

</div>

    </div>
  )
}

export default Overview