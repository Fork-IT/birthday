import React from 'react'

const Sections = ({title,message,index}) => {
  
  return title === "Happy Birthday, XYZ" ? (
    <section className="w-full min-w-full">
      <div className="w-full h-screen bg-black bg-opacity-50 flex gap-5 flex-col items-center justify-center">
        <h1 className="text-black font-primary lg:text-[5rem]">{title}</h1>
        <p className="text-black font-primary lg:text-2xl p-5">{message}</p>
      </div>
    </section>
  ) : (
    <section className="relative w-full min-w-full">
      <div className="w-full h-screen bg-black bg-opacity-50 flex gap-10 flex-col items-center justify-center p-5  border border-black">
        <div className="w-[80%]">
          <h1 className="font-semibold font-primary tracking-wider lg:text-[5rem]">
            {title}
          </h1>
        </div>
        <div className="w-[80%] h-fit whitespace-break-spaces ">
          <p className=" text-black tracking-normal font-primary lg:text-[2.5rem]">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sections
