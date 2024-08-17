
import { key } from '../SecretFile'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=>{

  const form = useRef();
  //this component sends a mail to the app developer;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs .sendForm('service_3wj8atp', 'template_gd81ql8', form.current, {
        publicKey: key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Send Successfully!");
          e.target.reset();
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
return <div className='flex flex-col justify-start sm:justify-start md:justify-centre lg:justify-center xl:justify-center items-center px-5 py-10 w-full h-auto'>
      <h1 className='text-yellow-400 w-full font-bold text-4xl px-2 py-3'>Contact</h1>

    <form
ref={form}
onSubmit={sendEmail}
className="flex flex-col justify-center items-center  w-full sm:w-full md:w-full lg:w-full px-10 py-20 rounded-md h-96 shadow-md shadow-yellow-700 bg-opacity-75 bg-blue-200 "
>
<div className=' mt-2 text-blue-900 w-full rounded-md bg-orange-400 h-16 '>
  <input className='font-thin text-2xl  w-full h-14 rounded-md text-start pl-3' type="text" placeholder="Enter Name"  name="user_name" />
</div>
<div
className='mt-2 text-blue-900 w-full rounded-md bg-orange-400 h-16 '
>
  <input className=' font-thin text-2xl w-full h-14 rounded-md text-start pl-3' type="email" placeholder="Email" name="user_email" />
</div> 
<div
className=' mt-2 text-blue-900 w-full rounded-md bg-orange-400 h-16 '
>
  <textarea className=' font-thin text-2xl w-full h-36 rounded-md text-start pl-3' type="text" placeholder="Write message here!" name="message"/>
</div>
<div
className='w-full mt-24'
>
  <button
  type="submit"
  className=' px-10 py-2 bg-opacity-25 hover:scale-110 hover:bg-white hover:text-yellow-400 rounded-md shadow-md shadow-red-700 bg-yellow-900'
  value='Send'>
    Submit
  </button>
</div>
</form>
</div>
}
export default Contact;