import React from 'react'

const Team = () => {
  return (
    <div className='mt-8'>
      <div className='text-center font-extrabold text-4xl'>
        Our Team
      </div>
      <div class="md:grid md:grid-cols-3 gap-8 mt-4 md:container md:mx-auto z-0">
  <div className='m-12'>
  <div className='w-80 h-96 bg-transparent cursor-pointer group perspective' >
      <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-100'>
        <div className='absolute backface-hidden border-2 w-full h-full'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' className='w-full h-full'></img>
        </div>
        <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-navbg overflow-hidden'>
        <div className='text-center flex flex-col items-center justify-center h-full text-gray-700 px-2 pb-24'>
          <h1 className='text-3xl font-semibold'>The King</h1>
          <p className='my-2'>asd</p>
          <button className='bg-teal-500 px-6 text-white font-semibold rounded-full absolute -bottom-20 delay-50 duration-1000 
          group-hover:bottom-20 scale-0 group-hover:scale-125'>
            Watch Now
          </button>
        </div>
        </div>
              </div>
    </div>
  </div>
  <div className='m-12'>
  <div className='w-80 h-96 bg-transparent cursor-pointer group perspective' >
      <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-100'>
        <div className='absolute backface-hidden border-2 w-full h-full'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' className='w-full h-full'></img>
        </div>
        <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-navbg overflow-hidden'>
        <div className='text-center flex flex-col items-center justify-center h-full text-gray-700 px-2 pb-24'>
          <h1 className='text-3xl font-semibold'>The King</h1>
          <p className='my-2'>asd</p>
          <button className='bg-teal-500 px-6 text-white font-semibold rounded-full absolute -bottom-20 delay-50 duration-1000 
          group-hover:bottom-20 scale-0 group-hover:scale-125'>
            Watch Now
          </button>
        </div>
        </div>
              </div>
    </div>
  </div>
  <div className='m-12'>
  <div className='w-80 h-96 bg-transparent cursor-pointer group perspective' >
      <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-100'>
        <div className='absolute backface-hidden border-2 w-full h-full'>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' className='w-full h-full'></img>
        </div>
        <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-navbg overflow-hidden'>
        <div className='text-center flex flex-col items-center justify-center h-full text-gray-700 px-2 pb-24'>
          <h1 className='text-3xl font-semibold'>The King</h1>
          <p className='my-2'>asd</p>
          <button className='bg-teal-500 px-6 text-white font-semibold rounded-full absolute -bottom-20 delay-50 duration-1000 
          group-hover:bottom-20 scale-0 group-hover:scale-125'>
            Watch Now
          </button>
        </div>
        </div>
              </div>
    </div>
  </div>
</div>

    

    </div>
  )
}

export default Team