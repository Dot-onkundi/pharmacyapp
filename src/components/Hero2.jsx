import React from 'react'
import Imageone from '../Assets/kaimage.svg'
// import {GiWorld} from 'react-icons/gi'
// import {MdPhoneIphone} from 'react-icons/md'
// import {SiBandrautomation} from 'react-icons/si'
// import {FaTruckMoving, FaRegThumbsUp} from 'react-icons/fa'


const Hero2 = () => {
  return (
    <div name='home2' className='w-full h-[440px] flex flex-col justify-between text-white bg-[#2b3636]'>
        <div className="grid grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-4  ">
                <p className='text-2xl'>Unique Care</p>
                <h1 className='py-3 text-4xl font-bold md:text-7xl'>Convinience</h1>
                <p className='text-2xl'>Our ultimate goal</p>
                <button className='border bg-none my-4 py-3 px-6 rounded-full sm:w-[60%] font-bold bg-[#09a59a]'>Start Access</button>
            </div> 

            <div className="div">

                <img className='w-full' src={Imageone} alt='none'/>
            </div>

        </div>
        {/* <div className="absolute flex flex-col py-8 mx-auto md:min-w-[760px] bottom-[-80%] md:left-1/2 transform md:-translate-x-1/2 border border-slate-300 rounded-xl text-center shadow-xl ">
                <p className=' text-2xl pb-2'> Unmatched Services</p>
                <div className="flex justify-betwee px-4">
                    <p className='flex px-4 py-2 text-slate-700'> <FaTruckMoving className='h-6 text-[#09a59a]'/> 24 Hour Delivery</p>
                    <p className='flex px-4 py-2 text-slate-700'> <FaRegThumbsUp className='h-6 text-[#09a59a]'/> Efficient services</p>
                    <p className='flex px-4 py-2 text-slate-700'> <MdPhoneIphone className='h-6 text-[#09a59a]'/> Doctor on call</p>
                    <p className='flex px-4 py-2 text-slate-700'> <SiBandrautomation className='h-6 text-[#09a59a]'/> Automated Service</p>
                </div>
            </div>
         */}


    </div>
  )
}

export default Hero2