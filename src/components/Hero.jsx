import React from 'react'

const Hero = () => {
  return (
    <div name='home' className='w-full mx-auto '> 
        <div className="max-h-[500] relative">
            {/* Overlay */}
            <div className="absolute items-center w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center ">
                <h1 className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The Best</h1>
                <h1 className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-[#2b3636]'>HealthCare</span> Delivered</h1>
                {/* <button className='border rounded-lg bg-none text-gray-100 px-4 py-2 '>Sign In</button> */}

            </div>
            <img className='w-full max-h-[500px] object-cover ' src='https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='none'/>

        </div>

    </div>
  )
}

export default Heronp