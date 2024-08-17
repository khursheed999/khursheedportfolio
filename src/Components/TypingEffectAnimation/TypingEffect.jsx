import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
const TypingEffect = () => {

  return (
    <div>
       
        <h1 className='text-yellow-400 font-bold text-5xl mt-5'>Khursheed
            <h1 className='typing-effect text-2xl mt-5'>
            <Typewriter
        words={
            [' Front-end developer.', 'Programmer.',' Web developer.']
        }
        loop={Infinity}
        cursor
        cursorStyle='|'
        cursorColor='white'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        
        />
            </h1>
        </h1>
        
    </div>
  )
}

export default TypingEffect