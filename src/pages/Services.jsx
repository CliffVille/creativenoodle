import React from 'react'
import cribCleaner from "../assets/cribcleaners.png";
import rebel from "../assets/rebel.png";
import nsc from "../assets/nsc.png";
import duckHunt from "../assets/duckhunt.png";

const Services = () => {

   const projects = [
      {
        img: cribCleaner,
        title: "Crib Cleaners",
        desc: " The Crib Cleaners website, built for a power washing company, uses React and Tailwind CSS. It offers a clean navigation and dynamic visuals. ",
        live: "https://cribcleaners.cliffordvilleneuve.ca/",
        code: "https://github.com/CliffVille/TheCribCleaners",
      },
      {
        img: rebel,
        title: "Rebel Clothing store",
        desc: "Rebel's clothing store website was built using JavaScript and jQuery and CSS, featuring a seamless shopping experience with user-friendly cart functionality.",
        live: "https://rebel.cliffordvilleneuve.ca/",
        code: "https://github.com/CliffVille/rebelclothing",
      },
      {
        img: nsc,
        title: "NSC Gallery",
        desc: "NSC's Art Gallery portfolio website was crafted using Masonry.js, HTML, and CSS, offering a visually dynamic layout with smooth, responsive design.",
        live: "https://nsc.cliffordvilleneuve.ca/",
        code: "https://github.com/CliffVille/nsc",
      },
      {
        img: duckHunt,
        title: "Duck Hunt - an interactive JavaScript game",
        desc: "The Duck Hunt game is animated with CSS keyframes and JavaScript, react to mouse movements and fly away from the cursor, with shooting simulated through sound effects and disappearing animations.",
        live: "https://duckhunt.cliffordvilleneuve.ca/",
        code: "https://github.com/CliffVille/duckhunt",
      },
    ]; 

  return (
    <div className="flex flex-col min-h-screen font-montserrat mt-12">

      <div className="flex flex-col justify-start items-start ml-48">
        <h1 className="text-4xl text-bold font-extrabold uppercase">Services</h1>
        <p className="w-1/3 text-xl">Browse our solutions to see what we can offer to you and your business or company!</p>
      </div>

      <div className="flex flex-col justify-center items-center w-[74%] mx-auto min-h-[500px]">
        <div className="flex flex-row gap-10 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[207px] flex flex-col justify-center items-center rounded-[40px] bg-yellow mb-4">
              <h1 className="text-xl lg:text-4xl text-black mb-4">Web Design</h1>
              <p className="text-[10px] lg:text-[12px] text-black w-3/4">Browse through what we can offer you and your business or company!</p>
            </div>
          </div>
                
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-[207px] flex flex-col justify-center items-center rounded-[40px] bg-yellow mb-4">
              <h1 className="text-xl lg:text-4xl text-black mb-4">Site Development</h1>
              <p className="text-[10px] lg:text-[12px] text-black w-3/4">Browse through what we can offer you and your business or company! </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mb-4">
            <div className="w-full h-[207px] flex flex-col justify-center items-center rounded-[40px] bg-yellow mb-4">
              <h1 className="text-xl lg:text-4xl text-black mb-4">Graphic Design</h1>
              <p className="text-[10px] lg:text-[12px] text-black w-3/4">Browse through what we can offer you and your business or company! </p>
            </div> 
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[74%] mx-auto justify-center items-center mb-16">
        <div className="flex flex-col justify-start items-start w-3/4">
          <h1 className="text-4xl text-bold font-extrabold uppercase mb-8">Our Approach</h1>
            <div  className="flex flex-row justify-center items-center gap-16">
              <div className="w-[67px] h-[67px] rounded-full bg-yellow mb-2"></div>
              <p className="text-md text-black w-3/4">Browse through what we can offer!</p>
            </div>
            <div  className="flex flex-row justify-center items-center gap-16">
              <div className="w-[67px] h-[67px] rounded-full bg-yellow mb-2"></div>
              <p className="text-md text-black w-3/4">Browse through what we can offer!</p>
            </div>
            <div  className="flex flex-row justify-center items-center gap-16">
              <div className="w-[67px] h-[67px] rounded-full bg-yellow mb-2"></div>
              <p className="text-md text-black w-3/4">Browse through what we can offer!</p>
            </div>
        </div>
        <div className="w-1/4 h-[207px] rounded-lg bg-yellow mt-16"></div>
      </div>
      <section className="text-white px-5 py-16 max-w-6xl mx-auto" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] mx-auto md:mx-0 border-accent pb-6 text-black">Projects</h2>
            <p className="mb-8 text-black">
              These are some of my projects. I have built these with React, Masonry.js, vanilla JavaScript, 
              Tailwind CSS, and vanilla CSS. Check them out.
            </p>
          </div>
        </div>


        <div className="projects container mx-auto grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => {
            return (
              <div 
                key={i} 
                className="group relative border-[6px] border-accent overflow-hidden"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />

                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="py-3 text-center font-bold px-2 text-white text-[10px] md:text-xl">
                    {project.desc}
                  </p>

                    <div className="flex gap-4">
                      <a
                        href={project.live}
                        className="px-4 py-1 bg-blue-500 hover:bg-blue-600 font-bold uppercase"
                      >
                        Live
                      </a>
                      <a
                        href={project.code}
                        className="px-4 py-1 bg-blue-500 hover:bg-blue-600 font-bold uppercase"
                      >
                        Code
                      </a>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
   </div>
  )
}

export default Services