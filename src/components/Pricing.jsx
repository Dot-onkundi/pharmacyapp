import React from 'react'
import {BsCheckLg} from 'react-icons/bs'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white'>
       <div className="w-full h-[800px] absolute mix-blend-overlay bg-slate-900  ">

       </div>
      
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">

                    <h2 className='uppercase text-3xl '>pricing </h2>
                    <h3 className='font-bold text-5xl text-white py-8'> The right price for consultation</h3>
                    <p className='text-3xl'>We understand the importance of providing medications that are not only effective but also affordable.</p>
                </div>

                <div className="grid md:grid-cols-2">


                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className='uppercase px-3 py-1 bg-[#09a59a] text-white rounded-2xl text-sm'>Standard</span>
                        <div className="div">
                            <p className='text-6xl font-bold py-4 flex '>3000 KES <span className='text-xl text-slate-300 flex flex-col justify-end'>/month</span></p>
                        </div>
                        <div className="div">
                            <p className='text-2xl py-8 text-slate-500'>We are committed to providing you with the best possible guidance and support in all matters related to pharmaceuticals.</p>
                            <div className="text-2xl">
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Basic Consultation.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Current Research.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Health and Wellness Education.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Product information.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Weekly sessions</p>
                                
                                <button className='w-full py-4 my-4 text-white bg-[#09a59a] rounded-xl'>Get Started</button>

                            </div>
                        </div>

                    </div>
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className='uppercase px-3 py-1 bg-[#dfac20] text-white rounded-2xl text-sm'>Premium</span>
                        <div className="div">
                            <p className='text-6xl font-bold py-4 flex '>9000 KES <span className='text-xl text-slate-300 flex flex-col justify-end'>/month</span></p>
                        </div>
                        <div className="div">
                            <p className='text-2xl py-8 text-slate-500'>We are dedicated to providing you with the essential guidance and support you need in matters related to pharmaceuticals.</p>
                            <div className="text-2xl">
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Personalized Consultation.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>In-Depth Research.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Expert Analysis.</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Health and Wellness Education</p>
                                <p className='flex py-4'> <BsCheckLg className='text-[#09a59a] mr-4 w-8' size={18}/>Exclusive Discounts.</p>
                                
                                <button className='w-full py-4 my-4 text-white bg-[#09a59a] rounded-xl'>Get Started</button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        
        


    </div>
  )
}

export default Pricing