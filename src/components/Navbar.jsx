import React from 'react'
import {GiStairsCake} from "react-icons/gi"

const Navbar = () => {
  return (
    <div className="absolute z-1 w-full h-[12vh] bg-yellow-500 flex items-center justify-around">
      <div className="p-3 flex gap-2 items-center justify-center">
        <GiStairsCake size={25} />
        <h1 className="font-primary text-[1.8rem] font-bold">Happy21</h1>
      </div>
      <div className="flex font-primary text-[1.2rem]  items-center justify-center gap-20">
        <div className='cursor-pointer hover:font-bold hover:text-white hover:underline decoration-blue-500 duration-300'>A Wish</div>
        <div className='cursor-pointer hover:font-bold hover:text-white hover:underline decoration-blue-500 duration-300'>A Promise</div>
        <div className='cursor-pointer hover:font-bold hover:text-white hover:underline decoration-blue-500 duration-300'>A Scroll</div>
        <div className='cursor-pointer hover:font-bold hover:text-white hover:underline decoration-blue-500 duration-300'>Gallery</div>
      </div>
    </div>
  );
}

export default Navbar
