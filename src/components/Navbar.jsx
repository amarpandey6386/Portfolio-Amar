import { Brain, Contact, DockIcon, Folder, Home, MenuIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false);
  return (
    <div className='flex justify-between items-center px-10 py-5 backdrop-blur-2xl bg-gray-100 z-50'>
       <Link to='/'> <h2 className='text-4xl font-bold'>Portfolio</h2></Link>
        <ul className={`max-md:absolute max-md:top-0 max-md:left-0 flex items-center gap-10 font-medium  md:px-10 md:py-4 md:rounded-3xl shadow-2xl  max-md:flex-col transition-[width] duration-500 max-md:h-screen  justify-center max-md:text-2xl backdrop-blur max-md:bg-black/70 max-md:text-white ${isOpen ? 'max-md:w-95' : 'max-md:w-0'}`}>
            <XIcon onClick={() => setIsOpen(!isOpen)} className='md:hidden w-6 h-6 absolute top-6 right-6 cursor-pointer'/>
            
            <Link className='flex items-center gap-2 justify-center ' onClick={() => {scrollTo(0,0), setIsOpen(false)}} to='/'>
            <Home className='w-5 h-5'/>
            <li>Home</li>
            </Link>
            <Link className='flex items-center gap-2 justify-center' onClick={() => {scrollTo(0,0), setIsOpen(false)}} to='/projects'>
            <Folder className='w-5 h-5'/>
            <li>Projects</li>
            </Link>
            <Link className='flex items-center gap-2 justify-center' onClick={() => {scrollTo(0,0), setIsOpen(false)}} to='/skills'>
            <Brain className='w-5 h-5'/>
            <li>Skills</li>
            </Link>
            <Link className='flex items-center gap-2 justify-center' onClick={() => {scrollTo(0,0), setIsOpen(false)}} to='/contact'>
            <Contact  className='w-5 h-5'/>
            <li>Contact</li>
            </Link>
            
        </ul>

        <div className='flex gap-10 items-center ml-4'>
            <Link to='/resume'><button className='px-4 py-2 rounded-full bg-black text-white font-medium shadow-xl cursor-pointer hover:bg-white/40 hover:text-black hover:border transition-all duration-200  '>Resume</button></Link>
        <MenuIcon onClick={() => setIsOpen(!isOpen)} className='md:hidden w-8 h-8 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navbar