import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-8'>
        <div className="max-w-[1240px] mx-auto">

            <div className="text-center my-5 ">
                <h2 className='text-4xl font-bold'> Your Trusted Medicine Outlet in Kenya</h2>
                <p className='text-3xl text-gray-500'>At Your Trusted Medicine Outlet in Kenya, we understand the importance of providing our customers with access to high-quality and affordable medicines. We strive to ensure that each and every customer leaves our store with the right medication for their needs. ur treatment options, we are here to help you every step of the way. </p>

            </div>
            <div className="grid md:grid-cols-3 gap-1 px-7 text-center">
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className='text-xl font-bold text-[#09a59a] '>100%</p>
                    <p className='text-gray-400 mt-2'>Satisfaction</p>

                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className='text-xl font-bold text-[#09a59a] '>24/7</p>
                    <p className='text-gray-400 mt-2'>Services</p>

                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className='text-xl font-bold text-[#09a59a] '>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>

                </div>
                
         
            </div>
        
        </div>
        


    </div>
  )
}

export default About