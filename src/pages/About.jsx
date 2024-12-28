import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col font-montserrat font-extrabold mt-12">
        <div className="head ml-[15em] justify-start items-start">
          <h1 className="text-6xl text-black uppercase w-1/4 mb-4">Meet the team</h1>
          <p className="text-lg lg:text-xl flex flex-wrap gap-1 text-black ml-2">Learn about our 
            <span className="text-lg lg:text-xl text-yellow">team</span> and why we do this.
          </p>
        </div>
    </div>
  )
}

export default About