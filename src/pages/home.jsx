import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  return (
    <div className="flex flex-col mx-auto justify-around items-center mt-12">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="w-1/2 text-4xl md:text-6xl font-bold text-black leading-tight uppercase mb-12">We're creative noodle</h1>
          <p className="text-xl md:text-2xl flex flex-row gap-1 text-black">We<p className="text- xl md:text-2xl text-yellow">design</p> and <p className="text-xl md:text-2xl text-yellow mb-12">develop</p>our dreams</p>
        </div>
        <div className="flex flex-row mx-10">
          <div className="flex flex-col mx-auto md:mx-0">
              <h3 className="w-full text-xl md:text-4xl font-bold text-black uppercase mb-4 mr-4">selected projects</h3>
              <div className="1/2">
              <p className="text-xl text-black flex flex-row justify-between uppercase mb-1.5">crib cleaners <FaArrowRight />
              </p>
              <div className="border-b-2 border-black mb-1.5"></div>
              <p className="text-xl text-black uppercase mb-1.5">pfp website development</p>
              <div className="border-b-2 border-black mb-1.5"></div>
              <p className="text-xl text-black uppercase mb-1.5">project 3</p>
              <div className="border-b-2 border-black mb-1.5"></div>
              <p className="text-xl text-black uppercase mb-1.5">project 4</p>
              <div className="border-b-2 border-black mb-1.5"></div>
              <p className="text-xl text-black uppercase mb-1.5">project 5</p>
              <div className="border-b-2 border-black mb-1.5"></div>
            </div>
          </div>
        </div>
      </div>
      <button className="w-[120px] px-2 py-2 rounded-full bg-yellow flex justify-center items-center font-bold mt-12 hover:scale-[1.1]">Let's Chat <span className="animate-pulse-scale text-xs ml-2 justify-center items-center"><FaArrowRight /></span></button>
    </div>
  )
}

export default Home