import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
  export const linkItems=[
    {
        id:0,
        linkItem:'Home',
    },
    {
        id:1,
        linkItem:'About',
    },
    {
        id:2,
        linkItem:'Skills',
    },
    {
        id:3,
        linkItem:'Projects',
    },
]

  function NavBar() {
    const [nav,setNav]=useState(false);

   
  return (
   <nav className='navbar bg-blue-600 bg-opacity-50 flex flex-row py-4 px-1 justify-between  md:justify-evenly items-center  z-10 font-semibold font-serif w-100 w-full h-20 fixed top-0 left-0 ring-1 ring-yellow-400'>
    <div className='md:hidden text-yellow-400 font-bold font-serif '>
        <h2 className='cursive-sign font-extralight text-5xl'>
            khursheed
            </h2>
    </div>
   <ul className='hidden md:flex flex-row w-full justify-evenly border-spacing-1 '>
    {linkItems.map(item=>(
        <li
         className='list-item py-4 px-8 size-50 text-white hover:text-yellow-400 cursor-pointer capitalize bg-blue-300   md:rounded-md shadow-md shadow-red-400 hover:bg-white hover:scale-105'
        key={item.id}>
        <a href={`#${item.linkItem}`} className='nav-link'>{item.linkItem}</a>
    </li>
    ))}
   </ul> 
   <div onClick={()=>{setNav(!nav)}} className='md:hidden cursor-pointer mr-4 py-2 px-2 text-yellow-500 ring-1 ring-yellow-400 rounded-md shadow-2xl shadow-yellow-300 justify-center items-center text-center'>
     {nav?
    <FaTimes size={30} />
     :
    <FaBars size={30} />
     }
   </div>
   
   <div className={`${nav?'fixed top-20 left-0 mb-60 w-full w-100':'hidden '
   } md:hidden flex flex-col items-center justify-center `}>
    {nav&&
     <ul className=' md:flex flex-row w-full justify-between border-spacing-1 '>
     {linkItems.map(item=>(
         <li
          className='list-item py-4 px-8 size-50 text-yellow-500 cursor-pointer capitalize md:bg-yellow-400   md:rounded-md md:shadow-2xl md:shadow-yellow-900 hover:scale-105 hover:text-white '
         key={item.id}>
         <a  href={`#${item.linkItem}`} className='nav-link'>{item.linkItem}</a>
     </li>
     ))}
    </ul> 
    }
   </div>
   </nav>
          
  )
}
export default NavBar;