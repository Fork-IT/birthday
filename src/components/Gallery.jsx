import React from 'react'

const Gallery = () => {
  return (
    <section className="relative w-full min-w-full">
      <div className="w-full h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center border border-black font-bold font-primary uppercase leading-[10rem] lg:text-[10rem]">
        <h1 className=" ">Gallery</h1>
        <h1 className=" ">Gallery</h1>
        <h1 className=" ">Gallery</h1>
        <h1 className=" ">Gallery</h1>
      </div>
      <div className="w-[20%] h-[20%] absolute z-10 top-5 left-10">
        <img src="/1.jpeg" alt="" className="" />
      </div>
      <div className="w-[20%] h-[20%] absolute z-10 top-52 left-52">
        <img src="/2.jpeg" alt="" className="" />
      </div>
      <div className="w-[20%] h-[20%] absolute z-10 top-5 right-10 ">
        <img src="/3.jpeg" alt="" className="" />
      </div>
    </section>
  );
}

export default Gallery
