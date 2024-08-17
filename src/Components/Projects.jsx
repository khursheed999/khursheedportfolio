import React from 'react'
import react from '../assets/LogoIcons/reactIcon.png'
import { projectData } from './Data/ProjectData/ProjectData';
const Projects = () => {
  return (
    
    <div className=' flex flex-col w-full w-100 justify-center sm:justify-start   md:justify-evenly py-5 px-1 mt-1 bg-blue-200 bg-opacity-75 ' id='Projects'>
      <h1 className='text-yellow-400 font-bold text-4xl px-2 py-3'>projects</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly px-1 py-10 space-x-2 '>
       {projectData.map(({id,title,photo,codelink,projectLink, style})=>(
       
       <div key={id} className={`flex flex-col m-5 min-w-80 md:w-96 mx-5 bg-blue-800 bg-opacity-50 ${style} space-x-5 px-5 py-5 rounded-md shadow-md justify-evenly items-center`}>
        <div className='flex h-72 w-72  sm:h-80 sm:w-80 md:h-80 md:w-80 bg-red-200 rounded-md justify-evenly space-x-5 items-center'>
        <img className='flex bg-pink-100 h-72 w-72 py-1 px-1 justify-center rounded-lg shadow-md shadow-blue-400' 
        src={photo} alt={title} />
        </div>
         <h4 className='font-bold text-3xl px-3 py-3 text-yellow-600 '>{title}</h4>
        <div className='flex flex-row space-x-5 justify-between w-full w-100 px-5 py-5'>
         <button className='cursor-pointer bg-yellow-200 rounded-md text-yellow-600 shadow-md shadow-red-600 hover:scale-105 hover:bg-white px-3 py-2 '>
           <a href={projectLink}>See project</a>
         </button>
         <button className={`cursor-pointer bg-yellow-200 shadow-md shadow-red-600 rounded-md text-yellow-600    hover:scale-105 hover:bg-white px-3 py-2 `}> 
           <a href={codelink}>See Code</a>
         </button>
        </div>
        </div>
       ))}
      </div>
    </div>
  )
}
export default Projects;
