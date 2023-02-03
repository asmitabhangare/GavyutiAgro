import React from 'react'

const Research = () => {
  return (
    <div className='mt-8 '>
      <div className='text-center font-extrabold text-4xl text-textunder'>
    Research
  </div>
  <div className='w-full h-96 shadow-2xl overflow-hidden relative mt-4'>
        <img src="https://static.vecteezy.com/system/resources/previews/005/003/938/non_2x/panoramic-realistic-milk-background-web-template-vector.jpg"
          className='w-full h-96 absolute inset-0 object-cover' />
        <div className='absolute inset-0 bg-gray-700 bg-opacity-25'></div>

        <div className='flex h-full items-center justify-center relative'>
          <div className='md:text-xl text-xl sm:ml-16 text-textunder font-bold md:tracking-wider'>
            <p className='text-center md:text-4xl md:m-4 text-xl text-black'>We are a research driven company . We are converting waste residue into useful products.</p>
            
          </div>
        </div>
      </div>
 
  </div>
  )
}

export default Research