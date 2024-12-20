import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../components/footer'


const Home = () => {
  return (
    <div className="flex flex-col mx-auto justify-center items-center mt-16">
      <div className="flex flex-row">
      <div className="flex flex-col">
        <h1 className="w-1/2 text-6xl font-bold text-black leading-tight uppercase">We're creative noodle</h1>
        <p className="text-2xl flex flex-row gap-1 mt-4 text-black">We<p className="text-2xl text-yellow">design</p> and <p className="text-2xl text-yellow">develop</p>your dreams</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-4xl font-bold text-black uppercase mb-4">selected projects</h3>
        <p className="text-xl text-black flex flex-row justify-between uppercase mb-1.5">crib cleaners <FaArrowRight />
        </p>
        <dive className="border-b-2 border-black mb-1.5"></dive>
        <p className="text-xl text-black uppercase mb-1.5">pfp website development</p>
        <dive className="border-b-2 border-black mb-1.5"></dive>
        <p className="text-xl text-black uppercase mb-1.5">project 3</p>
        <dive className="border-b-2 border-black mb-1.5"></dive>
        <p className="text-xl text-black uppercase mb-1.5">project 4</p>
        <dive className="border-b-2 border-black mb-1.5"></dive>
        <p className="text-xl text-black uppercase mb-1.5">project 5</p>
        <dive className="border-b-2 border-black mb-1.5"></dive>
      </div>
      </div>
      <button className="w-[150px] px-2 py-2 rounded-full bg-yellow mt-16">Let's chat</button>
      <Footer />
    </div>
  )
}

export default Home