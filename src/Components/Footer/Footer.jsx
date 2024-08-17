import React from 'react'
import { linkItems } from '../Header/NavBar'
import { FaWhatsappSquare } from 'react-icons/fa'
const Footer = () => {
    function openWhatsApp(){
   const phNo='+918494040457';
   const msg=encodeURIComponent('Assalamu Aalaikum, chat with me');
   const whatsAppURL=`https://wa.me/${phNo}?text=${msg}`;
   window.open(whatsAppURL,'_blank');
    };
  return (
     <div >
    <div className='footer grid grid-cols-1 sm:grid-cols-1 :grid-col-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
    <div className='about flex flex-col px-5 py-5'>
      <h1 className='text-yellow-400 font-bold text-4xl px-2 py-3'>About</h1>

        <p className='text-white text-2xl leading-loose'>
       I am a web developer and programmer, I love learning new things and technologies,
        work not for myself but also for the whole world. If you need my any assistance feel free to contact me.

        </p>
    </div>
    <div className='links flex flex-col space-y-3 px-5 py-5'>
      <h1 className='text-yellow-400 font-bold text-4xl px-2 py-3'>Links</h1>
        
        {linkItems.map(({id,linkItem})=>(
            <div key={id}>
        <a href={`#${linkItem}`} className='text-yellow-400 text-2xl'>{linkItem}</a>
       </div>
        ))}
       
    </div>
    <div className='contact flex flex-col px-3 py-3 h-72'>
      <h1 className='text-yellow-400 font-bold text-4xl px-2 py-3'>Address</h1>

        <p className='text-yellow-400 text-2xl'>
    Check S K Bala Hajin Bandipora j & k

        </p>
        <div className='flex flex-col px-2  py-2 '>
            <p className='text-yellow-400 text-2xl'>+91 8494040457</p>
            <p className='text-white text-2xl bg-yellow-400 px-2 py-2 rounded-md overflow-auto mt-5 '>khursheedahmadrah29@gmail.com</p>
        </div>
    </div>
    
    </div>
    <div className=' cursor-pointer hover:scale-110 hover:bg-blue-600 rounded-full fixed right-0 bottom-5  mr-10 mb-5'>
        <button onClick={openWhatsApp}>
            
                <FaWhatsappSquare size={70} className=' cursor-pointer bg-yellow-200 rounded-full px-3 py-3 shadow-md shadow-red-400 text-green-500'/>
            
        </button>
    </div>
    <div  className='footer-bottom   bg-blue-950 w-full w-100 px-3 py-5 leading-loose text-yellow-500 text-2xl bg-opacity-50'>
        <p>Copyright @2024 Developed by <mark>khursheed ahmad rah</mark></p>
    </div>
    </div>
  )
}

export default Footer