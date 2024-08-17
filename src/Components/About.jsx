

const About = () => {
  return (
    <div className=" pt-5  w-full w-100" id="About">
     <div className="   bg-yellow-200 bg-opacity-85 px-10 py-10 m-2 rounded-md shadow-md leading-loose text-blue-400 shadow-red-400">
      <h1 className="text-white font-bold text-3xl">About Me</h1>
      <p className="text-2xl leading-loose text-blue-900 ">
      Hello, I'm Khursheed Ahmad Rah, a passionate Front End Developer and Web app developer. 
         I am adept at juggling multiple projects and rapidly acquiring new skills, 
         which allows me to design and develop interactive, cross-platform websites and applications.
           My expertise spans a variety of programming languages and frameworks, 
           including JavaScript, HTML, CSS, React, Bootstrap, Git, GitHub, Python, Framer Motion,
            and React Spring. I am driven by a love for crafting beautiful, functional digital experiences
             and continuously seek to enhance my craft.</p>
      <a href="resume.pdf" download="khursheedResume.pdf" className="py-2 px-4 bg-blue-400 text-white rounded-md shadow-md shadow-red-800">Download Resume</a>
     </div>
    </div>
  )
}
export default About;