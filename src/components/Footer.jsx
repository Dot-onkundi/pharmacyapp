import React from 'react'

import {FaLinkedin, FaFacebook, FaGithub,FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-[#2b3636] text-gray-300 py-8 px-2 '>
        {/* <div className="max-w-[1240px] m-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8  ">
            <div className="div">
                <h1 className='font-bold uppercase mt-2'>Solutions </h1>
                <ul>

                    <li className='py-1'>Marketing </li> 
                    <li className='py-1'>Analytics </li>
                    <li className='py-1'>Data  </li>
                    <li className='py-1'>Services </li>
                    <li className='py-1'>Marketing </li>
                </ul>
            </div>
            <div className="div">
                <h1 className='font-bold uppercase mt-2'>About </h1>
                <ul>

                    <li className='py-1'>Marketing </li> 
                    <li className='py-1'>Analytics </li>
                    <li className='py-1'>Data  </li>
                    <li className='py-1'>Services </li>
                    <li className='py-1'>Marketing </li>
                </ul>
            </div>
            <div className="div">
                <h1 className='font-bold uppercase mt-2'>Pricing </h1>
                <ul>

                    <li className='py-1'>Marketing </li> 
                    <li className='py-1'>Analytics </li>
                    <li className='py-1'>Data  </li>
                    <li className='py-1'>Services </li>
                    <li className='py-1'>Marketing </li>
                </ul>
            </div>
            <div className="div">
                <h1 className='font-bold uppercase mt-2'>Careers </h1>
                <ul>

                    <li className='py-1'>Marketing </li> 
                    <li className='py-1'>Analytics </li>
                    <li className='py-1'>Data  </li>
                    <li className='py-1'>Services </li>
                    <li className='py-1'>Marketing </li>
                </ul>
            </div>
            <div className="col-span-2 pt-8 md:pt-2 ">
                <p className='font-bold uppercase '>Subscribe to our Newsletter</p>
                <p className='py-4'> The latest news articles and resources direct to your inbox</p>
                <form className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email'/>
                <button className='text-white p-2 pb-4 bg-[#09a59a] rounded-xl '> Subscribe</button>


                </form>


            </div>


        </div> */}
        <div className=" flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-300 border-b-2 border-gray-600">
            <p className='py-4'> 2023 @Onkundi Felix. All rights reserved</p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaTwitter/>
            <FaGithub/>

            </div>
            
        </div>




    </div>
  )
}

export default Footer