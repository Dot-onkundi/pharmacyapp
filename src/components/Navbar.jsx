import React, {useState} from 'react'
import {RiMenu3Fill} from 'react-icons/ri'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-scroll'




const Navbar = () => {
  const[nav, setNav]=useState(false)
  const handleClick=()=>setNav(!nav)



  const handleClose=()=>setNav(!nav)




  return (
    <div className='w-screen h-[80px] z-10 bg-[#2b3636] fixed mx-auto drop-shadow-lg'>
        <div className="max-w-[1240px] relative mx-auto px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
                <h1 className='text-xl font-bold mr-4 sm:text-4xl text-white'>Sadiki Pharmacy</h1>
                <ul className='  pl-28 hidden font-extralight md:flex text-gray-200'>
               
                  <li><Link to="home" smooth={true}  duration={500} >Home</Link></li>


                <li><Link to="home2" smooth={true} offset={-200} duration={500} >About </Link></li>
                <li><Link to="support" smooth={true} offset={-50} duration={500} >Support </Link></li>
                <li><Link to="platform" smooth={true} offset={-100} duration={500} >Platform</Link></li>
                <li><Link to="pricing" smooth={true} offset={-50} duration={500} >Pricing </Link></li>

                                
                    
                 </ul>
            </div>
            <div className="hidden md:flex pr-4">
                <button className='border-none bg-none text-gray-100 mr-4'>Sign In</button>
                <button className='border text-black bg-gray-300 rounded-md px-6 py-3 hover:bg-transparent hover:text-white'>Sign Up</button>
            </div>
            <div className="md:hidden mr-4  text-gray-100" onClick={handleClick}>
              {!nav?  <RiMenu3Fill size={30}/> :<AiOutlineCloseCircle size={40}/>}
           



            </div>


        </div>

        {/* Dropdown menu */}
        <ul className={!nav? 'hidden':'absolute w-25 px-12  right-9 text-black bg-white shadow-md border rounded-lg '}> 
        <li className='flex flex-col '>
                <Link  onClick={handleClose} className='p-3' to="home" smooth={true}  duration={500} >Home</Link>
                <Link  onClick={handleClose} className='p-3'to="home2" smooth={true} offset={-200} duration={500} >About </Link>
                <Link onClick={handleClose}  className='p-3'to="support" smooth={true} offset={-50} duration={500} >Support </Link>
                <Link  onClick={handleClose} className='p-3'to="platform" smooth={true} offset={-100} duration={500} >Platform</Link>
                <Link  onClick={handleClose} className='p-3'to="pricing" smooth={true} offset={-50} duration={500} >Pricing </Link>

                </li>  
                    <div className="flex flex-col justify-between my-2 gap-3 ">
                    <button className=' border hover:text-white hover:bg-gray-300 px-5 py-2 rounded-md'>Sign In</button>
                    <button className='border bg-gray-300 rounded-md px-5 py-2 hover:bg-transparent'>Sign Up</button>

                    </div>
                    



        </ul>

        
        


    </div>
  )
}

export default Navbar