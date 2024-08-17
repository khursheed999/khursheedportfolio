import React, { useState } from 'react'
import {skilledData} from './Data/SkilledData/SkilledData';
 const Skills = () => {
  const [activeTab,setActiveTab]=useState('All');
  const tabs=['All','Languages','Frameworks','Animation','Tools'];
  return (
    <div className='mt-5 w-full w-100 justify-between' id='Skills' >
      <h1 className='text-yellow-400 font-bold text-4xl px-1 py-3 m-5'>Skills</h1>
    <div className='flex justify-between bg-blue-200  w-full w-100 bg-opacity-50 space-x-4 overflow-x-auto px-4 py-2  items-center h-16'>
      {tabs.map((tab,index)=>(
        <button className={`${activeTab===tab?'bg-blue-500 text-yellow-400':'bg-yellow-200 text-blue-800'} rounded-lg shadow-md shadow-red-600 text-white px-4 py-2`} 
         key={index}
         onClick={()=>{setActiveTab(tab)}}>{tab}</button>
      ))}
      </div>
      <div className={`${activeTab==='All'?'grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8':'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
        {skilledData[activeTab].map(({id,style,title,photo,bgColor})=>(
         <div key={id} className={`${style} ${bgColor} py-3 px-3 m-5 rounded-md shadow-md ` }>
         <img src={photo} alt={title} height={50} width={50} />
         <h4 className='text-blue-400'>{title}</h4>
      </div>
        ))}
      </div>

    </div>
  )
}
export default Skills;