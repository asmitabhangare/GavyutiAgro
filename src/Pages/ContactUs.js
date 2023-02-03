import React from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const notify = () => toast.success('Email send Successfully', {
    position:"top-center",
    autoClose:5000,
    hideProgressBar:false,
    newestOnTop:false,
    closeOnClick:true,
    rtl:false,
    pauseOnFocusLoss:true,
    draggable:true,
    pauseOnHover:true,
  
      });
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1o2x5ym', 'template_lny7qch', e.target, 'WN1pDu2iOYhLRp8Tg')
      .then((result) => {
          console.log(result.text);
        
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <>
      <div className='w-full h-80 shadow-2xl overflow-hidden relative'>
      <ToastContainer />
        <img src='https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZ3Jhc3N8ZW58MHx8MHx8&w=1000&q=80'
          className='w-full h-96 absolute inset-0 object-cover' />
        <div className='absolute inset-0 bg-gray-700 bg-opacity-25'></div>

        <div className='flex h-full items-center justify-center relative'>
          <h1 className='md:text-3xl text-xl sm:ml-16 text-textunder font-bold md:tracking-wider'>
            <p className='text-center md:text-7xl text-5xl text-white'>Get in Touch</p>
            <hr className='my-4 mx-auto w-6/12 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700'></hr>
            <p className='text-black'>We Would Be Happy To Help And Advice If You Have Any Question Or Query</p>
          </h1>
        </div>
      </div>

      <form onSubmit={sendEmail}>
      <div className='bg-dropbg md:w-5/12 w-5/6 h-5/6 justify-center m-auto items-center relative -top-10 drop-shadow-xl rounded-2xl'>
        <div className=''>
          <input type="text" className="form-control block w-8/12 m-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition relative top-12
        ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="name" placeholder="Name" name="name" />
        </div>
        <div className='mt-6'>
          <input type="email" className="form-control block w-8/12 m-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition relative top-12
        ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="email" placeholder="Email" name='email' />
        </div>
        <div className='mt-6'>
          <textarea className="form-control block w-8/12 m-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300 rounded transition relative top-12
        ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="messages" rows="4" placeholder="Messages" name='messages' />
        </div>
        <div className='m-auto mt-20 items-center justify-center w-8/12 h-10 mb-6'>
          <button onClick={notify} type="submit" class="text-white bg-gradient-to-r w-full items-center justify-center from-blue-500 via-blue-600 
    m-auto to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
    shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            SEND</button>
            
        </div>
        <div className='mt-6 h-4'>
        </div>
      </div>
      </form>
      

      <div className='m-auto justify-center  md:4/6 w-5/6 md:h-72 h-full md:grid md:grid-cols-2'>
        <div className='h-48'>
          <div className='h-20 md:h-24 flex'>
            <div className='md:text-5xl text-3xl flex-initial w-10 md:ml-6'>
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className='md:text-xl text-base flex-initial w-full md:ml-10 font-body'>
              Mumbai, Maharashtra - 400612
            </div>
          </div>
          <div className='md:h-20 h-12 flex '>
            <div className='md:text-5xl text-3xl flex-initial w-10 md:ml-6'>
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className='md:text-xl text-base flex-initial w-full md:ml-10 font-body'>
              9892927162
            </div>
          </div>
          <div className='h-24 flex'>
            <div className='md:text-5xl text-3xl flex-initial w-10 md:ml-6'>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className='md:text-xl text- flex-initial w-10 md:ml-6 font-body'>
            gavyutiagro@gmail.com
            </div>
          </div>
        </div>

        <div className='h-60'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610031687!2d72.74109806321596!3d19.082197838151572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1672075287616!5m2!1sen!2sin" className='md:w-96 w-64 m-auto h-56' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </>
  )
}

export default ContactUs