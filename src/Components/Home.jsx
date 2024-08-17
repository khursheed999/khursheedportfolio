import photo from '../assets/khursheed.jpg'
import react from '../assets/LogoIcons/reactIcon.png'
import js from '../assets/LogoIcons/jsIcon.png'
import tailwindcss from '../assets/LogoIcons/tailwindcssIcon.png'
import TypingEffect from './TypingEffectAnimation/TypingEffect';
const Home=()=>{
   const logoIcons=[
      {
         id:0,
         photo:js,
         name:'JS',
         style:'shadow-orange-600',
         bgColor:'bg-yellow-200',
      },
      {
         id:1,
         photo:react,
         name:'react',
         style:'shadow-green-600',
         bgColor:'bg-yellow-200',
      },
      {
         id:2,
         photo:tailwindcss,
         name:'twcss',
         style:'shadow-orange-600',
         bgColor:'bg-yellow-200',
      }
   ]
   return <div className="flex flex-col mt-32 md:flex-row-reverse md:justify-evenly py-10 px-5 items-center justify-between space-y-10 w-100   w-full " id="Home">
      <div className=' flex ml-10 mt-20 px-2 py-2 justify-end bg-blue-400 rounded-xl shadow-md border-l-8 border-l-red-700 border-b-8 border-b-yellow-700 shadow-white '>
      <img src={photo} 
      alt="photo" height={100} width={200} 
      className='profile rounded-md rounded-tl-3xl  shadow-xl shadow-blue-400 ring-2 ring-yellow-400'/>

      </div>
       <div className='profile-text px-4 py-2 '>
        < div className=' py-2 px-4  '>
        <h1 className='text-white text-5xl '>Hello, I'm</h1> 
        <TypingEffect/>
        </div>
         <div className='px-4'>
         <button className='mt-10  cursor-pointer '>
            <a href="https://github.com/khursheed999"
             className='shadow-md shadow-red-400 font-bold text-red-800 cursor-pointer hover:scale-105 hover:bg-white hover:text-yellow-400 hover:outline-none hover:border-spacing-0  text-sm rounded-md  bg-yellow-300 bg-opacity-85 py-3 px-8'>GitHub Profile</a>
         </button>
         </div>
         <div className='mt-10 px-4'>
          <h2 className='text-4xl text-yellow-400'>Best skills on</h2>
       
         
          <div className='flex flex-row border-spacing-10'>
          {logoIcons.map(({id,name,photo,style,bgColor})=>(
           <div key={id} className={`${style} ${bgColor} py-3 px-3  m-5 rounded-md shadow-md ` }>
              <img src={photo} alt={name} height={50} width={50} />
              <h4 className='text-blue-400'>{name}</h4>
           </div>

          ))}
          
         </div>

         </div>
       </div>
      
      </div> 
}
export default Home;