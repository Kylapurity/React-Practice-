import React from "react";

function Hero () {
  return (
    <div className="text-white">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='text-blue-500 font-bold p-2 md:text-7xl'>Off Grid Solar Sytem</h1>
            <p className='md:text-2xl sm:text-6xl text-2xl font-bold md:py-6'>Suitable Energy for supply of  power and Use Of Natural Resources</p>
            <div className='flex justify-center items-center'>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
            Fast, Saving ,Suitable and Power.
            </p>
            <div className="">
            <button className="bg-blue-500 w- rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get in Touch
          </button>
          </div>
          </div>
          <div className="text-red-400">This text will be red</div>
    </div>
    </div>
  );
}
export default Hero;