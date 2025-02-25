import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  return (
    <div className="flex flex-col font-extrabold font-montserrat mt-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around mx-auto w-[74%]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="w-1/2 text-4xl lg:text-6xl font-bold text-black leading-tight uppercase mb-4">We&apos;re creative noodle</h1>
          <p className="text-xl lg:text-2xl flex flex-wrap gap-1 text-black">We{" "} 
            <span className="text-xl lg:text-2xl text-yellow">design</span> and{" "}
            <span className="text-xl lg:text-2xl text-yellow">develop</span> our
            dreams
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-col mx-auto lg:mx-0">
              <h3 className="w-full text-xl lg:text-4xl font-bold text-black uppercase mb-4">selected projects</h3>
              <div className="w-full">
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

      <button className="w-[120px] px-2 py-3 rounded-full bg-yellow flex items-center justify-center mx-auto font-bold mt-12 hover:scale-[1.1] mb-12">Let&apos;s Chat{" "} <span className="animate-pulse-scale text-xs ml-2"><FaArrowRight /></span></button>
    </div>
  )
}

export default Home