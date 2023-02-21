import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import {SiMediamarkt} from 'react-icons/si'
import {FiArrowRight} from 'react-icons/fi'



const Team = () => {
  return (
    <div name='support' className='w-full mt-24'>
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className='w-full h-full object-cover mix-blend-overlay ' src='https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='none'/>

      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
      <div className=" px-4 py-12">
        <h2 className='text-2xl pt-8 text-slate-300 uppercase text-center'> Support</h2>
        <h3 className='text-5xl font-bold py-6 text-center'> Finding the right team </h3>

        <p className='py-4 text-3xl text-slate-300 '>We are committed to keeping our prices competitive and accessible to all. Whether you need a routine refill or have questions about your treatment options, we are here to help you every step of the way.  Visit Your Trusted Medicine Outlet today. </p>
      </div>
     

      </div>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <BsTelephone size={70} className=' w-16 p-4 text-white bg-[#09a59a] rounded-lg mt-[-4rem]'/>
            <h3 className='font-bold text-2xl my-6'>Sales </h3>
            <p className='text-gray-600 text-xl'>Whether you need a routine refill or have questions about your treatment options, we are here to help you every step of the way. So why wait? Visit Your Trusted Medicine Outlet today</p>


          </div>
          <div className=" bg-slate-100 pl-8 py-4 cursor-pointer">
            <p className='flex items-center text-[#09a59a]'> Contact Us <FiArrowRight className='w-3 ml-3' />  </p>

          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <TbWorld size={70} className=' w-16 p-4 text-white bg-[#09a59a] rounded-lg mt-[-4rem]'/>
            <h3 className='font-bold text-2xl my-6'>Technical Support </h3>
            <p className='text-gray-600 text-xl'>Our technical support team is well-versed in the technical specifications and details of our products and services. </p>


          </div>
          <div className=" bg-slate-100 pl-8 py-4 cursor-pointer">
            <p className='flex items-center text-[#09a59a]'> Contact Us <FiArrowRight className='w-3 ml-3' />  </p>

          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <SiMediamarkt size={70} className=' w-16 p-4 text-white bg-[#09a59a] rounded-lg mt-[-4rem]'/>
            <h3 className='font-bold text-2xl my-6'>Consultation </h3>
            <p className='text-gray-600 text-xl'>Our personalized consultation service provides you with one-on-one access to our team of pharmaceutical professionals. </p>


          </div>
          <div className=" bg-slate-100 pl-8 py-4 cursor-pointer">
            <p className='flex items-center text-[#09a59a]'> Contact Us <FiArrowRight className='w-3 ml-3' />  </p>

          </div>
        </div>
      </div>
      




        
    </div>
  )
}

export default Team